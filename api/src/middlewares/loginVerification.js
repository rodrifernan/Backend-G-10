const jwt = require('jsonwebtoken');

const loginValidator = (req, res, next) => {
  try {
    req.user = jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    res.status(401).send({
      type: 'unauthorized',
      msg: 'Acceso denegado.',
    });
  }
};

module.exports = loginValidator;
