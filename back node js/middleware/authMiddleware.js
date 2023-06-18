// funciion para verificar el token de autenticacion del usuario 
const checkAuth=(req,res,next)=> {
if (req.headers.authorization&& req.headers.authorization.startsWith("Bearer")){
 console.log(" autorizado con token")
} else{
  console.log(" autorizado sin token")
}
next();

}
export default checkAuth;