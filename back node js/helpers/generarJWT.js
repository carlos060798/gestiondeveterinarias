import jwt from 'jsonwebtoken';// dependencia para generar el token jwt
const generarWTJ=(id)=>{ // funcion para generar el token
return jwt.sign({ID:id},process.env.JWT_SECRET,{expiresIn:"30d"});// se genera el token con el nombre y la clave secreta y se le da un tiempo de expiracion
}

export default generarWTJ;