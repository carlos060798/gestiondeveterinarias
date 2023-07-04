import { useState,useEffect} from "react";
import AdminNav from "../components/AdminNav";
import useAuth from "../hook/useAuth";
import Alerta from "../components/Alerta";
function EditarPerfil() {
    const { auth,actualizarUsuario} = useAuth();
    const [perfil, setPerfil] = useState({});
    const [alerta, setAlerta] = useState({});
    useEffect(() => {
        setPerfil(auth);
    }, [auth]);  

    const handleCambioPerfil =  async(e) => {
        e.preventDefault();

      const {nombre,email} = perfil;
      if([nombre,email].includes("")){
        setAlerta({
            msg: " Email y Nombre son obligatorios",
            error: true,
        })
        return;
      }

    const resultado= await actualizarUsuario(perfil);
    setAlerta(resultado);
}
    const {msg} = alerta;
    
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">Edita tu Perfil</h2>
      <p className="text-center mt-5">
        Modifica tu {}
        <span className="font-bold text-indigo-600">Informacion aqui</span>
      </p>
      <div className=" flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5"> 
            {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleCambioPerfil}>
            <div className="my-3">
              <label
                className="uppercase font-bold  text-gray-600"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="nombre"
                value={perfil.nombre || ""}
                onChange={(e) => setPerfil({ ...perfil,
                    [e.target.name]: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label
                className="uppercase font-bold  text-gray-600"
                htmlFor="web"
              >
                Sitio web
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="web"
                value={perfil.web || ""}
                onChange={(e) => setPerfil({ ...perfil,
                    [e.target.name]: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label
                className="uppercase font-bold  text-gray-600"
                htmlFor="telefono"
              >
                Telefono
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="telefono"
                value={perfil.telefono || ""}
                onChange={(e) => setPerfil({ ...perfil,
                    [e.target.name]: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label
                className="uppercase font-bold  text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                value={perfil.email || ""}
                onChange={(e) => setPerfil({ ...perfil,
                    [e.target.name]: e.target.value })}
              />
            </div> 
            <input
             type="submit"
             value="Guardar Cambios"
                className="bg-indigo-700 w-full mt-5 px-10 py-3 text-white uppercase font-bold  rounder-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default EditarPerfil;
