const {Router} = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post('/', async (req, res, next) => {

  let {name,email,message} = req.body

  contentHTML = `
    <h1>información del usuario </h1>
    <ul>
      <li>Nombre: ${name}</li>
      <li>Email: ${email}</li>
    </ul>
    <p> hola </p>
    `
  
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "efdwxstkn5itdeg6@ethereal.email", 
        pass: "ucwbfQRVgf2D1pEDC3", 
      },
    });
    const info = await transporter.sendMail ({
          from: "'ShopBag' <efdwxstkn5itdeg6@ethereal.email>",
          to: 'leidydi621@gmail.com',
          subject: "Mensaje de contacto shopbag",
          html: contentHTML,
    });
    console.log("Mensaje enviado", info.messageId);

    res.send('ok')

  //   let mailOptions = {
  //     text: `Hola ${name}, ${message}`,
  //   };
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {  
  //       res.status(500).send(error.message); 
  //     } else {  
  //       console.log("Email sent: " + info.response);
  //       res.status(200).jsonp(req.body);
  //     }
  //   });
  // }catch(error) {next(error)}
}),


module.exports = router;