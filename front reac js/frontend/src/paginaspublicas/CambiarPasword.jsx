import { useState } from "react";
import AdminNav from "../components/AdminNav";
import useAuth from "../hook/useAuth";
import Alerta from "../components/Alerta";
function CambiarPasword() {
    const [alerta, setAlerta] = useState({});
    const [password, setPassword] = useState({
        password: "",
        newpassword: "",
    });
    const {CambiarContraseña } = useAuth();
    const {msg} = alerta;


  const handleCambioPassword = async(e) => {
    e.preventDefault();
    console.log(password);
    if(Object.values(password).some((elemento) => elemento === "")){
        setAlerta({
            msg: " Todos los campos son obligatorios",
            error: true,
        })
        return;
    }
    if(password.newpassword.length < 6){
        setAlerta({
            msg: " La contraseña debe tener minimo 6 caracteres",
            error: true,
        })
        return;
    }
   const respuesta= await CambiarContraseña(password);
   setAlerta(respuesta);

}
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Contraseña
      </h2>
      <p className="text-center mt-5">
        Modifica tu {}
        <span className="font-bold text-indigo-600">Contraseña aqui</span>
      </p>
      <div className=" flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleCambioPassword}>
            <div className="my-3">
              <label
                className="uppercase font-bold  text-gray-600"
                htmlFor="password"
              >
                Contraseña Actual
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Contraseña Actual"
                name="password"
                onChange={(e) => setPassword({ ...password,
                    [e.target.name]: e.target.value })}
                
              />
            </div>
            <div className="my-3">
              <label
                className="uppercase font-bold  text-gray-600"
                htmlFor="newpassword"
              >
                Nueva Contraseña
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nueva Contraseña"
                name="newpassword"
                onChange={(e) => setPassword({ ...password,
                
                    [e.target.name]: e.target.value })}
              />
            </div>
            <input
              type="submit"
              value="Actualizar Contraseña"
              className="bg-indigo-700 w-full mt-5 px-10 py-3 text-white uppercase font-bold  rounder-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default CambiarPasword;
