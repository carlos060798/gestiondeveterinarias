import express  from "express"; 
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import VeterinarioRoutes from "./routes/VeterinarioRoutes.js";
import PacienteRoutes from "./routes/Paciente.Routes.js";

// creacion del servidor
const app = express();
app.use(express.json()); // para que el servidor pueda recibir json
dotenv.config(); // para poder usar las variables de entorno
connectDB(); // conexion del servidor a base de datos

// ruta principal de  la api de veterinario

app.use("/api/veterinario", VeterinarioRoutes);
app.use("/api/pacientes", PacienteRoutes);



// puerto de la app
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Servidor ejecutandose en el puerto 4000");
});