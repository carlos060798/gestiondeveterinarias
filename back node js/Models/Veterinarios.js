import mongoose from "mongoose"; 

// veterinarioSchema es el nombre del esquema de la base de datos de veterinarios 
const veterinarioSchema = mongoose.Schema({
    nombre: {
    type: String,
    required: true,
    trim: true
    },
    password:{
     type: String,
     required: true,
    },
    email:{
        type: String,
        unique: true,
        trim: true
    },
    telefono:{
        type: String,
        default: null,
        trim: true
    },web:{
        type: String,
        default: null,
        trim: true
    },
    token:{
     type: String,
    },
    confirmado:{
    type: Boolean,
    default: false
    }
});

// Creacion del modelo de veterinario
const Veterinario = mongoose.model("Veterinario", veterinarioSchema);

export default Veterinario;

