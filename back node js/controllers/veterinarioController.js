// función para controlar las operaciones crud de veterinario
import Veterinario from "../Models/Veterinarios.js";



//función para registrar un veterinario
const Registrar= async(req,res)=>{
   
   // const{email,password}=req.body;
    try{ 
     // guardar  nuevo usuario
        const nuevoveterinario= new Veterinario(req.body); //crea un nuevo usuario
        const veterinarioguardado= await nuevoveterinario.save();//guarda el usuario en la base de datos
        res.json({msg:'usuario registrado correctamente'}); //envia un mensaje de confirmación
    }catch(error){
        console.log(error);
       
    }
   
}

const Perfil=(req,res)=> {
    res.json({msg:'Ruta de veterinario /perfil'});
} //

export { Registrar,
    Perfil};