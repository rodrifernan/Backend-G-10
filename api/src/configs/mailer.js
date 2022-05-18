
const nodemailer = require('nodemailer');

 const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: "efdwxstkn5itdeg6@ethereal.email", 
      pass: "ucwbfQRVgf2D1pEDC3", 
    },
  });
transporter.verify().then(() => {
  console.log('Server is ready to take our messages');
})

await transporter.sendMail ({
          from: "'Olvido contraseña' <efdwxstkn5itdeg6@ethereal.email>",
          to:'johannes.gomez@gmail.com',
          subject: "Olvido contraseña",
          html: `
                <h4>dar click en el siguiente enlace para completar el proceso </h4>
                <a href='aqui va la verificación'></a>`
});



module.exports = transporter;