// funcion de envio de correo de registro confirmado token

import nodemailer from 'nodemailer';



 const sendEmailRegistro = async (datos) => {   // funcion de envio de correo de registro confirmado token
 //credeniales de mailtrap
  const  transport = nodemailer.createTransport({ // 
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a433f9495cc437",
      pass: "22770eb1d92c9e"
    }
  });
 
 
  const { email, nombre, token } = datos;  // datos de usuario

  const info= await transport.sendMail({ // cuerpo de mensaje del correo
    from: "AppVeterinaria",
    to: email,
    subject: "Confirmación de registro",
    html:  `<p>Hola ${nombre} comprueba tu cuenta</p>
    <p> tu cuenta ya  esta lista, solo debe comprobarla en siguiente enlace</p>
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a> 
    `
  })
    console.log("mensaje enviado: %s", info.messageId);
}

export default sendEmailRegistro;