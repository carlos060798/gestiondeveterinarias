import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom' // para manejar las rutas de la aplicacion en login  mejora el performance en lugar de a
import Alerta from '../components/Alerta';
import useAuth from '../hook/useAuth';
import axios from 'axios';




function Login() {
// use state para manejar el email y el password
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [alerta,setAlerta]=useState({});
const {setAuth}=useAuth();

const {msg}=alerta;

const navigate=useNavigate(); // hook para manejar las rutas de la aplicacion

const handleLogin = async(e)=>{ // funcion para manejar el login
   e.preventDefault();
   
  if([email,password].includes('')){ // validamos que los campos no esten vacios
    setAlerta({msg:'Todos los campos son obligatorios',error:true});
    
    
    return;
  }
  // HACEMOS LA CONSULTA DEL API
  try{
  const url='http://localhost:4000/api/veterinario/login'; // url para hacer la peticion al backend
  const {data}=await axios.post(url,{email,password}); // hacemos la peticion al backend
  console.log(data);
  localStorage.setItem('token',data.token); // guardamos el token en el localstorage
  setAuth(data); // guardamos los datos del usuario en el estado global
  navigate('/admin'); // redireccionamos al home
  }
  catch(error){// si hay un error mostramos la alerta de error
    setAlerta({msg:error.response.data.msg,error:true});
   }

}



  
  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          
          Inicia Sesion y Administrador de {""}
          <spam className="text-black">Pacientes</spam>
        </h1>
      </div>
      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
        {msg && <Alerta alerta={alerta}/>}
        <form  onSubmit={handleLogin}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder="Email de registro"
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              type="password"
              placeholder="********"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className=" w-full py-3 mt-5 rounded-xl uppercase font-bold bg-indigo-700 hover:cursor-pointer hover:bg-indigo-800 text-white md:w-auto px-10"
            value="Iniciar Sesion"
          />
        </form>
        <nav className='mt-10 lg:flex lg:justify-between'>
         <Link className='block text-center my-5 text-gray-500 hover:text-indigo-500' to="/Registar">¿No tienes una cuenta? Registrate </Link>
         <Link className='block text-center my-5 text-gray-500 hover:text-indigo-500' to="/olvide-password">¿Olvidaste tu contraseña?</Link>
        </nav>
      </div>
    </>
  );
}

export default Login;
