// funciion para verificar el token de autenticacion del usuario 
import jwt from 'jsonwebtoken';
import Veterinario from '../Models/Veterinarios.js';
const checkAuth= async(req,res,next)=> {
let token ;
if (req.headers.authorization&& req.headers.authorization.startsWith("Bearer")){
 console.log(" autorizado con token")
 try{
   token= req.headers.authorization.split(" ")[1];
   const decoded= jwt.verify(token,process.env.JWT_SECRET);
   console.log( "valor de docrect:",decoded)
   req.veterinario= await Veterinario.findById(decoded.ID).select("-password -token -confirmado ")
    return next()
} catch(err){
    const error= new error("token no valido con bearer");
    res.status(403).json({msg:error.menssage});

}
}
if(!token){
    const error= new error("no estas autorizado para acceder a este recurso");
    res.status(403).json({msg:error.menssage});
}
next();

}
export default checkAuth;