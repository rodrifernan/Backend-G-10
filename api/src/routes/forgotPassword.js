const { Router } = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { User, Role } = require('../db'); // traer mi modelo
const router = Router();
const { loginVerification, rootVerification } = require('../middlewares/login');
const { Op } = require('sequelize');



/* #### Backend
    - [ ] __POST /forgotPassword: */


    router.post(
        '/',
        async (req, res, next) => {
          try {
      
            const { password, email} = req.body;

            await User.update(
                {
                    password: bcrypt.hashSync(password, 10),
                  },
    
                 {
                where: {
                  email: email,
                },
              });
            
      
            res.send({
              msg: 'Contraseña Actualizada.',
            });
          } catch (error) {
            next(error);
          }
        }
      );
      
module.exports = router;
    