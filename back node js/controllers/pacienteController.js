import Paciente from "../Models/Paciente.js"


const agregarPaciente = async (req, res) => { // funcion para agregar paciente
const paciente = new Paciente(req.body); // agregar paciente para la bd
paciente.veterinario = req.veterinario._id; // obtener el id del veterinario que esta logeado que lo  trata
try{
const pacienteAlmacenado= await paciente.save();  // guardar paciente en la bd
res.json(pacienteAlmacenado); // mensaje de gurdado
}catch(error){
console.log(error);

}

}

const obtenerPaciente = async (req, res) => {}


export {
agregarPaciente
, obtenerPaciente
}