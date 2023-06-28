// esta funcion expone los datos atodos los componentes en un score global
import { createContext, useState,useEffect} from "react";
import axios from "axios";


const AuthContext= createContext();


function AuthProvaider({children}) {
    const [auth, setAuth] = useState({});


  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token"); // obtenemos el token del localstorage

      if (!token) return; // si no hay token no hacemos nada
      const config = { // creamos la configuracion para enviar el token por headers
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
     
      }
      try {
        const {data}= await axios('http://localhost:4000/api/veterinario/perfil',config); // hacemos la peticion al backend
      
        setAuth(data) // guardamos los datos del usuario en el estado global
      } catch (error) {
       console.error(error.reposnse.data.msg);
       setAuth({}); // si hay un error limpiamos el estado global
      }
  }
  autenticarUsuario()
}, [])
    return ( <>
       <AuthContext.Provider value={{auth,setAuth}}> 
         {children}
       </AuthContext.Provider>
    </> );
}

export  {AuthProvaider}

export default AuthContext;