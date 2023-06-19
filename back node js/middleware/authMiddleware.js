// funciion para verificar el token de autenticacion del usuario 
import jwt from 'jsonwebtoken';
import Veterinario from '../Models/Veterinarios.js'; 

const checkAuth= async(req,res,next)=> {
let token ;
if (req.headers.authorization&& req.headers.authorization.startsWith("Bearer")){
 try{
   token= req.headers.authorization.split(" ")[1];
   const decoded= jwt.verify(token,process.env.JWT_SECRET);
   req.veterinario= await Veterinario.findById(decoded.ID).select("-password -token -confirmado ")
    return next()
} catch(err){
    const error= new error("token no Valido");
    res.status(403).json({msg:error.menssage});

}
}
if(!token){
    const error= new error("Token no Valido o inexistente");
    res.status(403).json({msg:error.menssage});
}
next();

}
export default checkAuth;