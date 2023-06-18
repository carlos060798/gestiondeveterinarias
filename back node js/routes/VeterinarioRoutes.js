// contine las rutas de veterinario y las funciones de cada ruta
import express from "express";
import { Registrar, Perfil,Confirmar, Autenticar } from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

// rutas de veterinario publicas 

 router.post('/', Registrar); //ruta para registrar un veterinario
router.get('/confirmar/:token', Confirmar); //ruta para confirmar la cuenta de un veterinario via token de forma dinamica
router.post('/login', Autenticar); //ruta para confirmar la cuenta de un veterinario via token de forma dinamica

// rutas de veterinario privadas
router.get('/perfil',checkAuth, Perfil)  //
export default router;