const nodemailer = require('nodemailer');
const { Router } = require('express');
const router = Router();
const fs = require('fs');


// Tu contraseña de aplicación para el dispositivo de Johannes : gonkersckgaimsob

router.post('/', async (req, res, next) => {
    console.log('Estoy BACK get __GET /mail__ ')
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: { // nombre de usuario y nuestra contraseña
            user: "johannes.gomez@gmail.com", // correo de host
            pass: "mdiqfuqrtfvrhefn",          // contraseña generada de google de nuestra aplicacion
            },
            tls: {rejectUnauthorized:false}
        });
        //fs.readFile("./attachment.txt", function (err, data))        
       const infoMail =  await transporter.sendMail ({
                from: "'ShopBag' <johannes.gomez@gmail.com>", // quien lo envia
                to:'johannes.gomez@gmail.com',                       // para quie va dirigido el email
                subject: "Bienvenido Tienda Virtual ShopBag",
                // attachments: ['attachment.txt'],
                 html: `
                 <b>Gracias por Preferirnos...</b>
                 <a href = "https://frontend-g-10.vercel.app" target=”_blank”>pulse aquí para visitar nuestra tienda virtual!</a>`
        });
        return res.status(200).send('Mail Enviado al Cliente....!', infoMail.messageId)

    } catch (error) {
        next(error);
      }
});

module.exports = router;