const nodemailer = require('nodemailer');

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
transporter.verify().then(() => {
  console.log('Server is ready for send emails');
})



module.exports = transporter;