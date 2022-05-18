const { Router } = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { User, Role } = require('../db'); // traer mi modelo
const router = Router();
const { loginVerification, rootVerification } = require('../middlewares/login');
const { Op } = require('sequelize');
const transporter = require('../configs/mailer');




/* #### Backend
    - [ ] __POST /sendEmail: */


router.post(
    '/',
    (async (req, res, next) => {
  
      try {
  
        const { email } = req.body;
  
        const user = await User.findOne({ where: { email:  bcrypt.hashSync(req.body.email, 10), } });

        

        if ( user )    

        return res.status(400).send({
          errors: [
            {
              msg: 'Email Incorrecto.',
              param: 'email',
            },
          ],
        });

        transporter.sendMail({
            from: '"Olvido contraseña" <efdwxstkn5itdeg6@ethereal.email>',
            to: email,
            subject: 'Olvido contraseña',
            html: `
              <h2>Haga click en el enlace para restablecer su contraseña</h2>
              <a href="https://frontend-g-10.vercel.app/forgotPassword/">Restablecer contraseña</a>
            `
        });
  
        res.send({
          msg: 'email enviado',
          email: email,
        });
      } catch (error) {
        next(error);
      }
    }));
  


module.exports = router;
    