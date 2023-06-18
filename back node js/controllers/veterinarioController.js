// función para controlar las operaciones crud de veterinario
import Veterinario from "../Models/Veterinarios.js";

//función para registrar un veterinario
const Registrar = async (req, res) => {
  const { email } = req.body;
  // prevenir usuarios duplicados
  const existeUsuario = await Veterinario.findOne({ email }); //busca un usuario con el mismo email

  if (existeUsuario) {
    //si existe un usuario con el mismo email
    const error = new Error("El usuario ya está registrado"); //crea un nuevo error
    res.status(400).json({ msg: error.message }); //envia un mensaje de error
  }

  try {
    // guardar  nuevo usuario
    const nuevoveterinario = new Veterinario(req.body); //crea un nuevo usuario
    const veterinarioguardado = await nuevoveterinario.save(); //guarda el usuario en la base de datos
    res.json({ msg: "usuario registrado correctamente" }); //envia un mensaje de confirmación
  } catch (error) {
    console.log(error);
  }
};

const Perfil = (req, res) => {
  res.json({ msg: "Ruta de veterinario /perfil" });
}; //

//función para confirmar la cuenta de un veterinario via token
const Confirmar = async (req, res) => {
  const { token } = req.params; //obtiene el token de la url
  const usuarioconfirmar = await Veterinario.findOne({ token }); //busca un usuario con el mismo token
  console.log(usuarioconfirmar);
  // verificar si existe el  token del usuario
  if (!usuarioconfirmar) {
    //si no existe un usuario con el mismo token
    const error = new Error("No existe un usuario con el token proporcionado"); //crea un nuevo error
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

const Autenticar = async (req, res) => {
  const { email,
    password } = req.body;

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
  console.log(password);
  if ( await usuario.compararContraseña(password)) {
    console.log("password correcto");
  } else {
    console.log("password incorrecto");
  }
};
export { Registrar, Perfil, Confirmar, Autenticar };
