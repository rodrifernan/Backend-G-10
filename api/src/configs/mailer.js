const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: false,
  auth: {
    user: 'ramos.joshelin20@gmail',
    pass: 'bdenumcbslzfsmch',
  },
});

transporter.verify().then(() => {
  console.log('');
});
