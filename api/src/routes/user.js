const { Router } = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { User } = require('../db'); // traer mi modelo
const router = Router();
const loginVerification = require('../middlewares/loginVerification');
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
    .custom(value => {
      return User.findOne({ where: { userName: value } }).then(user => {
        if (user) {
          return Promise.reject('Este nombre de usuario ya está en uso.');
        }
      });
    }),
  body('password')
    .isLength({ min: 5 })
    .withMessage('Ingresé una contraseña más larga.'),
  body('passwordConfirmation').custom((value, { req }) => {
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
    .normalizeEmail()
    .withMessage('Ingresé un email válido.')
    .custom(value => {
      return User.findOne({ where: { email: value } }).then(user => {
        if (user) {
          return Promise.reject('Este email ya está en uso.');
        }
      });
    }),

  body('banned').default(false).isBoolean(),
  body('address').not().isEmpty().withMessage('Este campo es obligatorio.'),
  body('roleId').not().isEmpty().withMessage('Este campo es obligatorio.'),
];

/* #### Backend
    - [ ] __POST /user: */

router.post('/', userValidators, async (req, res, next) => {
  console.log('POST /user');

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    userName,
    password,
    firstName,
    lastName,
    phone,
    email,
    banned,
    address,
    roleId,
    idPersonal,
  } = req.body;

  try {
    await User.create({
      userName,
      password: bcrypt.hashSync(password, 10),
      firstName,
      lastName,
      phone,
      email,
      banned,
      address,
      roleId,
      idPersonal,
    });

    return res.status(201).send({ msg: 'Registro Completo' });
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

module.exports = router;
