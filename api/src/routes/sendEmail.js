const { Router } = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { User, Role } = require('../db'); // traer mi modelo
const router = Router();
const { loginVerification, rootVerification } = require('../middlewares/login');
const { Op } = require('sequelize');
const nodemailer = require("nodemailer");



/* #### Backend
    - [ ] __POST /sendEmail: */


router.post("/", async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({
      where: { email: email },
    });

    if (user === null)
      return res.status(400).send({
        errors: [
          {
            msg: "Email Incorrecto.",
            param: "email",
            email: email,
          },
        ],
      });
    else {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            // nombre de usuario y nuestra contraseña
            user: "johannes.gomez@gmail.com", // correo de host
            pass: "mdiqfuqrtfvrhefn", // contraseña generada de google de nuestra aplicacion
          },
          tls: { rejectUnauthorized: false },
        });

      //fs.readFile("./attachment.txt", function (err, data))
        const recupero = await transporter.sendMail({
          from: "'ShopBag' <johannes.gomez@gmail.com>",
          to: email,
          subject: "Olvido contraseña",
          html: `
              <b>Haga click en el enlace para restablecer su contraseña</b>
              <a href="https://frontend-g-10.vercel.app/forgotPassword/">Restablecer contraseña</a> 
            `,
        });
           //Cambiaremos el href para adaptar al deploy
        res.send({
          msg: "email enviado",
          email: email,
        });
      } catch (error) {
        next(error);
      }
    }
  } catch (error) {
    next(error);
  }
});
  


module.exports = router;
    
