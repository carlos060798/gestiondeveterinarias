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
    usuarioconfirmar.confirmado= true; //actualiza el estado del usuario a activo
    await usuarioconfirmar.save(); //guarda los cambios
    res.json({ msg: "cuenta confirmada " });
  } catch (error) {
    console.log(error);
  }
};

export { Registrar, Perfil, Confirmar };
