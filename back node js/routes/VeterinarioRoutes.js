// contine las rutas de veterinario y las funciones de cada ruta
import express from "express";

const router = express.Router();

// rutas de veterinario
 router.get('/', (req, res) => { 
    res.send('Ruta de veterinario');
 });

export default router;