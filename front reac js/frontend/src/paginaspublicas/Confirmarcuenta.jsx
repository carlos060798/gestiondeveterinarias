import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // importamos el hook useParams para obtener los parametros de la url
import axios from "axios";
import Alerta from "../components/Alerta";

function ConfirmarCuenta() {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false); // state para saber si la cuenta esta confirmada o no
  const [Cargando, setCargando] = useState(true); // state para saber si esta cargando o no
  const [alerta, setAlerta] = useState({}); // state para mostrar alerta
  const params = useParams(); // obtenemos los parametros de la url
  const { id } = params;

  useEffect(() => { // useEffect para confirmar la cuenta
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/veterinario/confirmar/${id}`; // url para confirmar la cuenta dada del backend
        const { data } = await axios(url); // hacemos la peticion al backend
        setCuentaConfirmada(true); // si todo sale bien cambiamos el state de cuenta confirmada a true
        setAlerta({ msg: data.msg }); // mostramos la alerta de cuenta confirmada
      } catch (error) {
        setAlerta({ msg: error.response.data.msg, error: true }); // si hay un error mostramos la alerta de error o el token ya se uso
      }

      setCargando(false); // cambiamos el state de cargando a false para indicar que ya se cargo la  consulta ala api
    };
    confirmarCuenta();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Confirma tu cuenta y Empieza {""}
          <spam className="text-black">Administra Pacientes</spam>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        { // condicional para mostrar alerta cuando la cuenta se  use el token o se confirme la cuenta
        !Cargando && <Alerta alerta={alerta} />}
        
        {// condicional para mostrar el mensaje de cuenta confirmada y el link de iniciar sesion
        cuentaConfirmada && (
          <Link to="/" className="block text-center my-5 text-gray-500 hover:text-indigo-500">
            Iniciar Sesion
          </Link>
        )}
      </div>
    </>
  );
}

export default ConfirmarCuenta;
