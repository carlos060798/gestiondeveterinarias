import express from "express";
import {
  agregarPaciente,
  obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

// rutas del paciente
/**
 *  checkAuth es para proteger la ruta de agregar paciente y obtener
 */
// operaciones generles del crud 
router
  .route("/")
  .post(checkAuth, agregarPaciente)
  .get(checkAuth, obtenerPacientes);

// operaciones del crud 
router
  .route("/:id")
  .get(checkAuth, obtenerPaciente)
  .put(checkAuth, actualizarPaciente)
  .delete(checkAuth, eliminarPaciente); // obtener paciente por id

export default router;
