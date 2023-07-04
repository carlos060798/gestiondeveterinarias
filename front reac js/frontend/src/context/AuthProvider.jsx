// esta funcion expone los datos atodos los componentes en un score global
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(); // creamos el contexto

function AuthProvaider({ children }) {
  const [cargando, setCargado] = useState(true); // estado para saber si ya se hizo la peticion al backend
  const [auth, setAuth] = useState({});

  useEffect(() => {
    // funcion para hacer la peticion al backend
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token"); // obtenemos el token del localstorage

      if (!token) {
        setCargado(false); // cambiamos el estado para saber que ya se hizo la peticion
        return;
      } // si no hay token no hacemos nada
      const config = {
        // creamos la configuracion para enviar el token por headers
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axios(
          "http://localhost:4000/api/veterinario/perfil",
          config
        ); // hacemos la peticion al backend

        setAuth(data); // guardamos los datos del usuario en el estado global
      } catch (error) {
        console.error(error.reposnse.data.msg);
        setAuth({}); // si hay un error limpiamos el estado global
      }
      setCargado(false); // cambiamos el estado para saber que ya se hizo la peticion
    };
    autenticarUsuario();
  }, []);
  const cerrarSesion = () => {
    // funcion para cerrar sesion del localstorage y del estado global
    localStorage.removeItem("token"); // removemos el token del localstorage
    setAuth({}); // limpiamos el estado global
  };

  const actualizarUsuario = async (datos) => {
    // funcion para actualizar los datos del usuariop
    console.log(datos);
    const token = localStorage.getItem("token"); // obtenemos el token del localstorage
    if (!token) {
      setCargado(false); // cambiamos el estado para saber que ya se hizo la peticion
      return;
    } // si no hay token no hacemos nada
    const config = {
      // creamos la configuracion para enviar el token por headers
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const url = `http://localhost:4000/api/veterinario/perfil/${datos._id}`;
      const { data } = await axios.put(url, datos, config); // hacemos la peticion al backend

      return {
        msg: "Datos actualizados correctamente",
      };
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const CambiarContraseña = async (datos) => {
    const token = localStorage.getItem("token"); // obtenemos el token del localstorage

    if (!token) {
      setCargado(false); // cambiamos el estado para saber que ya se hizo la peticion
      return;
    } // si no hay token no hacemos nada
    const config = {
      // creamos la configuracion para enviar el token por headers
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const url = `http://localhost:4000/api/veterinario/actualizar-password`;
      const { data } = await axios.put(url, datos, config); // hacemos la peticion al backend
      console.log(data.msg);

      return {
        msg: "Contraseña actualizada correctamente"
      }
    } catch (error) {
      return {
        msg: "Contraseña incorrecta, intente de nuevo",
        error: true
      };
    }
  };
  return (
    <>
      <AuthContext.Provider
        value={{
          auth,
          setAuth,
          cargando,
          cerrarSesion,
          actualizarUsuario,
          CambiarContraseña
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export { AuthProvaider };

export default AuthContext;
