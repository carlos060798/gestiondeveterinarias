// contine las rutas de veterinario y las funciones de cada ruta
import express from "express";
import { Registrar, Perfil,Confirmar, Autenticar } from "../controllers/veterinarioController.js";

const router = express.Router();

// rutas de veterinario
// ruta de registro
 router.post('/', Registrar);

 // ruta de login
 router.get('/perfil', Perfil);


// ruta de confirmacion de cuenta

router.get('/confirmar/:token', Confirmar); //ruta para confirmar la cuenta de un veterinario via token de forma dinamica

router.post('/login', Autenticar); //ruta para confirmar la cuenta de un veterinario via token de forma dinamica
export default router;