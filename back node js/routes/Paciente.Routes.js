import express  from "express";
import { agregarPaciente,obtenerPaciente } from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

// rutas del paciente 
/**
 *  checkAuth es para proteger la ruta de agregar paciente y obtener 
 */
router.route("/").post( checkAuth,agregarPaciente).get(obtenerPaciente);

export default router;