import express  from "express"; 
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import VeterinarioRoutes from "./routes/VeterinarioRoutes.js";

// creacion del servidor
const app = express();
app.use(express.json()); // para que el servidor pueda recibir json
dotenv.config();
connectDB();
// ruta principal de  la api de veterinario
app.use("/api/veterinario", VeterinarioRoutes);

// puerto de la app
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Servidor ejecutandose en el puerto 4000");
});