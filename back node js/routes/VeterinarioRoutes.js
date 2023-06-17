// contine las rutas de veterinario y las funciones de cada ruta
import express from "express";
import { Registrar, Perfil } from "../controllers/veterinarioController.js";

const router = express.Router();

// rutas de veterinario
// ruta de registro
 router.post('/', Registrar);

 // ruta de login
 router.get('/perfil', Perfil);
export default router;