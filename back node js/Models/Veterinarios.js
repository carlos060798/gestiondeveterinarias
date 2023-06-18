import mongoose from "mongoose"; 
import bcrypt from "bcrypt"; //libreria para hachear la contraseña
import generarID from "../helpers/generarID.js";

// veterinarioSchema es el nombre del esquema de la base de datos de veterinarios 
const veterinarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      telefono: {
        type: String,
        default: null,
        trim: true,
      },
      web: {
        type: String,
        default: null,
      },
      token: {
        type: String,
        default: generarID(), //genera un token aleatorio
      },
      confirmado: {
        type: Boolean,
        default: false,
      },
});
//  funcion para hachear la contraseña del veterinario
veterinarioSchema.pre("save",  async function(next) {
  if(!this.isModified("password")){ //si la contraseña no ha sido modificada
   next(); //continua con la ejecucion
  }
  const  salt= await bcrypt.genSalt(10); //genera un salt para hachear la contraseña
  this.password = await bcrypt.hash(this.password, salt); //hachea la contraseña
});

// funcion para comparar la contraseña del veterinario
veterinarioSchema.methods.compararContraseña= async function(passwordinput){
   return await bcrypt.compare(passwordinput, this.password); //compara la contraseña
}


// Creacion del modelo de veterinario
const Veterinario = mongoose.model("Veterinario", veterinarioSchema);


export default Veterinario;


