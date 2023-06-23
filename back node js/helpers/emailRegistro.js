// funcion de envio de correo de registro confirmado token

import nodemailer from 'nodemailer';


 const sendEmailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    console.log(datos);
}

export default sendEmailRegistro;