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



module.exports = transporter;