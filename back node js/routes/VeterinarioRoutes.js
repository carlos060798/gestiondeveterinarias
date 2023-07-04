// contine las rutas de veterinario y las funciones de cada ruta
import express from "express";
import {
  Registrar,
  Perfil,
  Confirmar,
  Autenticar,
  olvidarContraseña,
  Comprobartoken,
  newPassword,
  ActualizarPerfil,
  ActualizarPassword
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

// rutas de veterinario publicas

router.post("/", Registrar); //ruta para registrar un veterinario
router.get("/confirmar/:token", Confirmar); //ruta para confirmar la cuenta de un veterinario via token de forma dinamica
router.post("/login", Autenticar); //ruta para confirmar la cuenta de un veterinario via token de forma dinamica
router.post("/olvidarPassword", olvidarContraseña); //ruta para  recuperar la contraseña de un veterinario    
router.route("/olvidarPassword/:token").get(Comprobartoken).post(newPassword ); //ruta para confirmar el token para recuperar contraseña y almacenar la nueva contraseña

// rutas de veterinario privadas 
router.get("/perfil", checkAuth, Perfil); //
router.put("/perfil/:id",checkAuth, ActualizarPerfil); //ruta para actualizar el perfil de un veterinario
router.put("/actualizar-password",checkAuth, ActualizarPassword); //ruta para actualizar el perfil de un veterinario
export default router;
