import mongoose from "mongoose"; 

const PacienteSchema = mongoose.Schema({
  nombre:{
    type: String,
    required: true,

  },
  propietario:{
  type: String,
  required: true,
  },
  email:{
    type: String,
    required: true,
  },
  fecha:{
   type: Date,
   required: true,
   default: Date.now()
  },
  sintomas:{
    type: String,
    required: true,
  },

 /*   es la referencia  de la llave primaria que conecta veterinarios con pasientes
 veterinario:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "veterinario"
  }*/
  veterinario:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "veterinario"
  },
},
{
    timestamps: true,
}

)

const  Paciente= mongoose.model('Paciente', PacienteSchema);

export default Paciente;