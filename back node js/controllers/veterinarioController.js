// función para controlar las operaciones crud de veterinario
import express from "express";
import Veterinario from "../Models/Veterinarios.js";
import generarWTJ from "../helpers/generarJWT.js";
import generarID from "../helpers/generarID.js";
import sendEmailRegistro from "../helpers/emailRegistro.js";
import sendEmailPassword from "../helpers/emailCambioPass.js";

//función para registrar un veterinario
const Registrar = async (req, res) => {
  const { email, nombre } = req.body;
  // prevenir usuarios duplicados
  const existeUsuario = await Veterinario.findOne({ email }); //busca un usuario con el mismo email

  if (existeUsuario) {
    //si existe un usuario con el mismo email
    const error = new Error("El usuario ya está registrado"); //crea un nuevo error
    return res.status(400).json({ msg: error.message }); //envia un mensaje de error
  }

  try {
    // guardar  nuevo usuario
    const nuevoveterinario = new Veterinario(req.body); //crea un nuevo usuario
    const Veterinarioguardado = await nuevoveterinario.save(); //guarda el usuario en la base de datos
    // enviar email de confirmación
    sendEmailRegistro({
      email,
      nombre,
      token: Veterinarioguardado.token,
    });

    res.json({ Veterinarioguardado }); //envia un mensaje de confirmación
  } catch (error) {
    console.log(error);
  }
};
// funcion para obtener el perfil del veterinario una vez validado
const Perfil = (req, res) => {
  const { veterinario } = req;
  res.json(veterinario);
};

//función para confirmar la cuenta de un veterinario via token

const Confirmar = async (req, res) => {
  const { token } = req.params; //obtiene el token de la url
  const usuarioconfirmar = await Veterinario.findOne({ token }); //busca un usuario con el mismo token
  console.log(usuarioconfirmar);
  // verificar si existe el  token del usuario
  if (!usuarioconfirmar) {
    //si no existe un usuario con el mismo token
    const error = new Error("Token no valido"); //crea un nuevo error
    return res.status(400).json({ msg: error.message }); //envia un mensaje de error
  }

  try {
    //actualizar el usuario
    usuarioconfirmar.token = null; //elimina el token del usuario
    usuarioconfirmar.confirmado = true; //actualiza el estado del usuario a activo
    await usuarioconfirmar.save(); //guarda los cambios
    res.json({ msg: "cuenta confirmada " });
  } catch (error) {
    console.log(error);
  }
};

//función para autenticar un veterinario
const Autenticar = async (req, res) => {
  const { email, password } = req.body;

  // confirmar  si existe el usuario con el email proporcionado
  const usuario = await Veterinario.findOne({ email }); //busca un usuario con el mismo email
  if (!usuario) {
    const error = new Error("El usuario no existe"); //crea un nuevo error
    return res.status(404).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
  }
  // verificar si el usuario esta confirmado
  if (!usuario.confirmado) {
    const error = new Error("tu cuenta no ha sido confirmada"); //crea un nuevo error
    return res.status(403).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
  }
  // revisar si el password es correcto

  if (await usuario.compararContraseña(password)) {
    //compara el password proporcionado con el password del usuario
    // autenticar el usuario
    res.json({
      //envia los datos del usuario

      _id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarWTJ(usuario.id),
    }); // genera el token y lo envia
  } else {
    const error = new Error("password incorrecto"); //crea un nuevo error
    return res.status(403).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
  }
};

// funciones para recueprar contraseña de usuarios

const olvidarContraseña = async (req, res) => {
  // funciones para recueprar contraseña de usuarios

  const { email } = req.body; //obtiene el email del usuario

  const existeVeterinario = await Veterinario.findOne({ email }); //obtiene el email del usuario
  if (!existeVeterinario) {
    // valida que existe el email del usuario
    // si no existe el email del usuario
    const error = new Error("El usuario no existe"); //crea un nuevo error
    return res.status(400).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
  }
  // si coincide el email del usuario
  try {
    existeVeterinario.token = generarID(); // genera un token segun el id del usuario
    await existeVeterinario.save(); // guarda el token en la base de datos

    // enviar email de confirmación de cambio de contraseña

    sendEmailPassword({
      email,
      nombre: existeVeterinario.nombre,
      token: existeVeterinario.token,
    });

    res.json({ msg: "se ha enviado un correo para restablecer la contraseña" }); // guarda el token en la base de datos
  } catch (err) {
    console.log(err);
  }
};
const Comprobartoken = async (req, res) => {
  // funciones para  validar el token en la base de datos
  const { token } = req.params; // obtiene el token de la url

  const tokenValido = await Veterinario.findOne({ token }); // busca el token en la base de datos
  if (tokenValido) {
    // se valida si existe el token
    res.json({ msg: "el token  es valido usuario existe" });
  } else {
    // si no existe el token
    const error = new Error("El token no es valido"); //crea un nuevo error
    return res.status(400).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
  }
  console.log(token);
};

const newPassword = async (req, res) => {
  // funcion para crear el password
  const { token } = req.params; // se obtine el token de la url
  const { password } = req.body; // se obtine el  nuevopassword  dado por el usuario

  const veterinario = await Veterinario.findOne({ token }); // se busca el usuario con el token generado
  if (!veterinario) {
    // si el token no es valido
    const error = new Error("El token no es valido"); //crea un nuevo error
    return res.status(400).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
  }
  // si el token  es valido
  try {
    // se actualiza el password del usuario
    veterinario.token = null; // se elimina el valor del token inicial a null
    veterinario.password = password; // se actualiza el password
    await veterinario.save(); // se actualiza el password en la bd
    res.json({ msg: "pasword actualizado" });
    console.log(veterinario);
  } catch (error) {
    console.log(error);
  }
};
// funcion para actualizar el perfil del usuario 

const ActualizarPerfil = async (req, res) => {
  
  const {email} = req.body;
const veterinario = await Veterinario.findById(req.params.id) //busca un usuario con el mismo id
//si el usuario no existe
if(!veterinario){
  const error = new Error("Hubo  un error"); //crea un nuevo error
  return res.status(400).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
}

// si el cambia el email
if(veterinario.email !== req.body.email){
  const existeEmail = await Veterinario.findOne({email}); //busca un usuario con el mismo email
  if(existeEmail){ // si el email ya esta registrado
    const error = new Error("El email ya esta registrado"); //crea un nuevo error
    return res.status(400).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
  }
}
 // intercambia los valores del usuario
try{
  veterinario.nombre = req.body.nombre ;
  veterinario.email = req.body.email ;
  veterinario.web= req.body.web;
  veterinario.telefono = req.body.telefono;

 // guarda los cambios en la base de datos
  const veterinarioActualizado = await veterinario.save();
  res.json(veterinarioActualizado); // envia los datos del usuario actualizado
}
catch(error){
  console.log(error);
};
}

const ActualizarPassword = async (req, res) => {
  // leer daros del usuario
  const {id} = req.veterinario;
  const { password,newpassword} = req.body;
  console.log(id);
  console.log({password,newpassword});
 // comprobar el password actual
  
 const veterinario = await Veterinario.findById(id) //busca un usuario con el mismo id
 console.log(veterinario);
//si el usuario no existe
if(!veterinario){
  const error = new Error("Hubo  un error"); //crea un nuevo error
  return res.status(400).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
}
// comprobar el password actual
if(await veterinario.compararContraseña(password)){
  // almacenar el nuevo password
  veterinario.password = newpassword;
  await veterinario.save();
  res.json({msg:"password actualizado"});
} else{
  const error = new Error("password incorrecto"); //crea un nuevo error
  return res.status(403).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
}

}
export {
  Registrar,
  Perfil,
  Confirmar,
  Autenticar,
  olvidarContraseña,
  Comprobartoken,
  newPassword,
  ActualizarPerfil,
  ActualizarPassword
};
