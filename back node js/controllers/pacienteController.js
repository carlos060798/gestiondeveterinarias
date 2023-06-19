import Paciente from "../Models/Paciente.js";

const agregarPaciente = async (req, res) => {
  // funcion para agregar paciente
  const paciente = new Paciente(req.body); // agregar paciente para la bd
  paciente.veterinario = req.veterinario._id; // obtener el id del veterinario que esta logeado que lo  trata
  try {
    const pacienteAlmacenado = await paciente.save(); // guardar paciente en la bd
    res.json(pacienteAlmacenado); // mensaje de gurdado
  } catch (error) {
    console.log(error);
  }
};

const obtenerPacientes = async (req, res) => {
  // funcion para listar los pacientes por veterianrio que los creo
  const pacientes = await Paciente.find()
    .where("veterinario")
    .equals(req.veterinario); // obtener los pacientes del veterinario que esta logeado
  res.json(pacientes);
};

const obtenerPaciente = async (req, res) => {
  // funcion para obtener un paciente por id
  const { id } = req.params; // obtener el id del paciente
  const paciente = await Paciente.findById(id); // obtener paciente por id
  if (!paciente) { // busca el id del paciente
    res.status(404).json({ msg: "Paciente no encontrado" }); // si no lo encuentra
  }
  if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) { // copara el id referenciado por para metro y el obtenido en la base de datos 
    // comparar si el veterinario que esta logeado es el que creo el paciente
    const error = new Error("No tienes permiso para ver este paciente"); // si no es el mismo veterinario que creo el paciente
    return res.json({ msg: error.message }); } // mensaje de error
  
  if (paciente) {
    res.json(paciente);
  } 
}
// funcion para actualizar paciente
const actualizarPaciente = async (req, res) => {
  const { id } = req.params; // obtener el id del paciente
  console.log(id);
  const paciente = await Paciente.findById(id); // obtener paciente por id
  if (!paciente) {
    res.status(404).json({ msg: "Paciente no encontrado" });
  }
  if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    // comparar si el veterinario que esta logeado es el que creo el paciente
    const error = new Error("No tienes permiso para ver este paciente");
    return res.json({ msg: error.message });
  }
 // si el paciente existe y el id referenciado es de un paciente valido
    // actulizar pacientes

    paciente.nombre=  req.body.nombre || paciente.nombre;
    paciente.propietario=  req.body.propietario || paciente.propietario;
    paciente.email= req.body.email || paciente.email ;
    paciente.fecha= req.body.fecha || paciente.fecha;
    paciente.sintomas= req.body.sintomas || paciente.sintomas;

    try{
const pacienteActualizado = await paciente.save();
 res.json(pacienteActualizado);
    } catch(err){
    console.log(err);
    }
};

const eliminarPaciente = async (req, res) => {

// eliminar paciente 
const { id } = req.params; // obtener el id del paciente
console.log(id);
const paciente = await Paciente.findById(id); // obtener paciente por id
if (!paciente) {
  res.status(404).json({ msg: "Paciente no encontrado" });
}
if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
  // comparar si el veterinario que esta logeado es el que creo el paciente
  const error = new Error("No tienes permiso para ver este paciente");
  return res.json({ msg: error.message });
}

// si el paciente existe y el id referenciado es de un paciente valido


try {
await paciente.deleteOne();
res.json({ msg: "Paciente eliminado" });

} catch(error) {
    console.error(error);
}

}

export {
  agregarPaciente,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
