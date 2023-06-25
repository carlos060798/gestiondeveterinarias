// funcion para enviar correo de cambio de contraseña
import nodemailer from 'nodemailer';



 const sendEmailPassword = async (datos) => {   // funcion de envio de correo de registro confirmado token
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
    subject: "Restablecer contraseña",
    html:  `<p>Hola ${nombre} has solicitado restablecer la contraseña</p>
    <p> genera tu nueva contraseña en siguiente enlace</p>
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Cambiar contraseña</a> 
    `
  })
    console.log("mensaje enviado: %s", info.messageId);
}

export default sendEmailPassword;