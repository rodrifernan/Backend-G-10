const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = require('../db'); // traer mi modelo
const router = Router();
const { loginVerification } = require('../middlewares/login');
const transporter = require('../configs/mailer');


//Validators
const loginValidator = [
  body('userOrEmail').not().isEmpty().withMessage('Este campo es obligatorio.'),
  body('password').not().isEmpty().withMessage('Este campo es obligatorio.'),
];
const nodemailer = require('nodemailer');
const { emails } = require('./mails');

const successLogin = (user, root) => {
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '1d' }
  );

  return {
    msg: 'Login Completo.',
    userName: user.userName,
    token,
    root,
  };
};

router.post('/', loginValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ type: 'validators', errors: errors.array() });
  }

  const { userOrEmail, password } = req.body;
  const user = await User.findOne({
    where: {
      [Op.or]: [{ email: userOrEmail }, { userName: userOrEmail }],
    },
  });

  if (!user)
    return res.status(401).send({
      type: 'noLogin',
      msg: 'No se pudieron comprobar sus credenciales.',
    });

  if (user.banned)
    return res.status(401).send({
      type: 'noLogin',
      msg: 'Usuario baneado.',
    });

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(401).json({
      type: 'noLogin',
      msg: 'No se pudieron comprobar sus credenciales.',
    });

  if (user.roleId === 'ad114fef-1e85-4dd7-af41-a252935b4e41') {
    const root = true;
    return res.send(successLogin(user, root));
  }

  res.send(successLogin(user));
});

router.post('/google', async (req, res, next) => {
  try {
    const {
      name: userName,
      givenName: firstName,
      familyName: lastName,
      email,
    } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) return res.send(successLogin(user));

    const newUser = await User.create({
      userName,
      firstName,
      lastName,
      email,
      password: '',
      address: '',
      idPersonal: '',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e43',
    });

    emails(email); // enviar correo de bienvenida

    res.send(successLogin(newUser));
  } catch (error) {
    next(error);
  }
});



module.exports = router;

