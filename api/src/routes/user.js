const { Router } = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { User, Role } = require('../db'); // traer mi modelo
const router = Router();
const { loginVerification, rootVerification } = require('../middlewares/login');
const { Op } = require('sequelize');
const nodemailer  = require('nodemailer');
const {emails}     = require('./mails');
// Validators

const userValidators = [
  body('userName')
    .not()
    .isEmpty()
    .withMessage('Este campo es obligatorio.')
    .trim()
    .matches(/^[a-zA-Z-0-9]*$/)
    .withMessage(
      'Ingresé un nombre de usuario que no contenga caracteres especiales ni espacios.'
    )
    .custom((value, { req }) => {
      return User.findOne({ where: { userName: value } }).then(user => {
        if (user) {
          if (req.route.path === '/update' && req.user.id === user.id) return;
          return Promise.reject('Este nombre de usuario ya está en uso.');
        }
      });
    }),
  body('password')
    .not()
    .isEmpty()
    .withMessage('Este campo es obligatorio.')
    .isLength({ min: 5 })
    .withMessage('Ingresé una contraseña más larga.'),
  body('passwordConfirmation')
    .not()
    .isEmpty()
    .withMessage('Este campo es obligatorio.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Las contraseñas no coinciden.');
      }
      return true;
    }),
  body('firstName')
    .not()
    .isEmpty()
    .withMessage('Este campo es obligatorio.')
    .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/)
    .withMessage(
      'Este campo no puede contener caracteres especiales ni números.'
    )
    .trim(),
  body('lastName')
    .not()
    .isEmpty()
    .withMessage('Este campo es obligatorio.')
    .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/)
    .withMessage(
      'Este campo no puede contener caracteres especiales ni números.'
    )
    .trim(),
  body('phone')
    .not()
    .isEmpty()
    .withMessage('Este campo es obligatorio.')
    .trim()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
    .withMessage('Ingresé un número de teléfono válido.'),
  body('email')
    .not()
    .isEmpty()
    .withMessage('Este campo es obligatorio.')
    .isEmail()
    .withMessage('Ingresé un email válido.')
    .custom((value, { req }) => {
      return User.findOne({ where: { email: value } }).then(user => {
        if (user) {
          if (req.route.path === '/update' && req.user.id === user.id) return;
          return Promise.reject('Este email ya está en uso.');
        }
      });
    }),

  body('banned').default(false).isBoolean(),
  body('address').not().isEmpty().withMessage('Este campo es obligatorio.'),
  body('roleId').default('ad114fef-1e85-4dd7-af41-a252935b4e43'),
  body('idPersonal').not().isEmpty().withMessage('Este campo es obligatorio.'),
];

/* #### Backend
    - [ ] __POST /user: */

router.post('/', userValidators, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  try {
    await User.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
    });


    console.log(req.body)
    emails(req.body.email) // enviar correo de bienvenida

    return res.status(201).send({ success: true, msg: 'Registro Completo' });
  } catch (error) {
    next(error);
  }
});

router.get('/', loginVerification, async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await User.findByPk(id, {
      attributes: {
        exclude: ['password', 'roleId', 'banned', 'createdAt', 'updatedAt'],
      },
    });

    return res.send(user);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/update',
  [
    loginVerification,
    ...userValidators.filter((item, index) => ![1, 2, 7, 9].includes(index)),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.user;

      await User.update(req.body, {
        where: {
          id,
        },
      });

      res.send({
        msg: 'Datos Actualizados.',
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/newPassword',
  [
    loginVerification,
    ...userValidators.filter((item, index) => [1, 2].includes(index)),
    body('newPassword')
      .not()
      .isEmpty()
      .withMessage('Este campo es obligatorio.')
      .isLength({ min: 5 })
      .withMessage('Ingresé una contraseña más larga.'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.user;

      const { password } = req.body;

      const user = await User.findByPk(id);

      if (!bcrypt.compareSync(password, user.password))
        return res.status(400).send({
          errors: [
            {
              msg: 'Contraseña Incorrecta.',
              param: 'password',
            },
          ],
        });

      await User.update(
        {
          password: bcrypt.hashSync(req.body.newPassword, 10),
        },
        {
          where: {
            id,
          },
        }
      );

      res.send({
        msg: 'Contraseña Actualizada.',
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/all', rootVerification, async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        [Op.not]: { roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e48' },
      },

      attributes: {
        exclude: ['updatedAt'],
      },
      include: {
        model: Role,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    }).then(data => data.map(({ dataValues }) => ({ ...dataValues })));

    res.send(users);
  } catch (error) {
    next(error);
  }
});

router.post('/ban', rootVerification, async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log(id);
    const user = await User.findByPk(id);
    console.log(user);

    await User.update(
      { banned: user.banned ? false : true },
      { where: { id: id } }
    );

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.post('/root', rootVerification, async (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.put('/', loginVerification, async (req, res) => {
  const { firstName, lastName, email, address, phone, userName, id } = req.body;

  const resp = await User.update(
    {
      firstName,
      lastName,
      email,
      address,
      phone,
      userName,
    },
    {
      where: { id: id },
    }
  );
  res.send('User Update');
});

module.exports = router;
