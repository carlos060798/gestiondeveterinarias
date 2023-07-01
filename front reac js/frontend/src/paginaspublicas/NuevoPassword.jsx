import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Alerta from '../components/Alerta';
import axios from "axios";

function NuevoPass() {
 // hook de manejo de componente
  const [password, setPassword] = useState(""); // use state  para  el nuevo valor de la contraseña
  const { token } = useParams(); // use params para  obtener el token de la url
  const [alerta, setAlerta] = useState({}); // use state para el nuevo valor de la Alerta
  const [tokenValido, setTokenValido] = useState(false); // use state para  el valor del token
  const [passwordModificado, setPasswordModificado] = useState(false); // use state para  el valor de la contraseña modificada
 
  useEffect(() => { // use effect para  comprobar el token cada vez que se  monte el componete
    const ComprobarToken = async () => {
      try {
        // consulta ala Api para validar el token
        const url = `http://localhost:4000/api/veterinario/olvidarPassword/${token}`;
        await axios(url);
        setAlerta({
          msg: "Ingresa  la nueva Contraseña",
        }); 
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: "Hubo un error  con  el enlace",
          error: true,
        });
      }
    };
    ComprobarToken();
  }, []);

  const { msg } = alerta;

// funcion que maneja el cambio de contraseña 
    const handleCambiarPasword = async (e) => {
      e.preventDefault();
     if(password.length<6){
        setAlerta({msg:'la contraseña debe tener al menos 6 caracteres',error:true});
     }
     try{
     const url =`http://localhost:4000/api/veterinario/olvidarPassword/${token}`
        const {data}= await axios.post(url,{password});

        setAlerta({msg:data.msg});
        setPasswordModificado(true);
     } catch(error){
        setAlerta({msg:error.response.data.msg,error:true});
     }
    }

  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Cambia tu Contraseña y Inicia {""}
          <spam className="text-black">Seccion</spam>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}

        { tokenValido && (<>

        <form onSubmit={handleCambiarPasword}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Escriba su nueva contraseña
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              type="password"
              placeholder="introduce tu email de registro"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className=" w-full py-3 mt-5 rounded-xl uppercase font-bold bg-indigo-700 hover:cursor-pointer hover:bg-indigo-800 text-white md:w-auto px-10"
            value="Cambiar Contraseña"
          />
        </form>
        
      
        </>
        )}
        {passwordModificado && (
          <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray-500 hover:text-indigo-500"
            to="/"
          >Inicia secion{" "}
          </Link>
          </nav>
        )}
       
      </div>
    </>
  );
}

export default NuevoPass;
