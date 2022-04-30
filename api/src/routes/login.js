const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = require('../db'); // traer mi modelo
const router = Router();

//Validators
const loginValidator = [
  body('userOrEmail').not().isEmpty().withMessage('Este campo es obligatorio.'),
  body('password').not().isEmpty().withMessage('Este campo es obligatorio.'),
];

router.post('/', loginValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userOrEmail, password } = req.body;
  const user = await User.findOne({
    where: {
      [Op.or]: [{ email: userOrEmail }, { userName: userOrEmail }],
    },
  });

  if (!user)
    return res
      .status(400)
      .send({ msg: 'No se pudieron comprobar sus credenciales.' });

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res
      .status(400)
      .send({ msg: 'No se pudieron comprobar sus credenciales.' });

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.TOKEN_SECRET, {expiresIn: '1d'}
  );

  res.send({
    msg: 'Login Completo.',
    userName: user.userName,
    token,
  });
});

module.exports = router;
