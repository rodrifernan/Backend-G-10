const nodemailer = require('nodemailer');

const emails = async (email) => {
    console.log('Estoy BACK /mail__ ')
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
                to:email,                       // para quie va dirigido el email
                subject: "Bienvenido Tienda Virtual ShopBag",
                // attachments: ['attachment.txt'],
                 html: `
                 <b>Gracias por Preferirnos como su Tieda Virtual de Compras y Ventas de Productos...</b>
                 <a href = "https://frontend-g-10.vercel.app" target=”_blank”>pulse aquí para visitar nuestra tienda!</a>`
        });
        return 
    } catch (error) {next(error)};

};

module.exports = {emails};