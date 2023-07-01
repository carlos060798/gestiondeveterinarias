import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
// para comunicar el front y back
import axios from "axios";
function Registar() {
  // use state de datos de registro
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  // state para alertas
  const [alerta, setAlerta] = useState({});

  // funcion para enviar datos de registro handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("enviando datos...");
    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({ msg: "todos los campos son obligatorios", error: true });

      return;
    }
    if (password !== repetirPassword) {
      setAlerta({ msg: "las contraseñas no son iguales", error: true });
      return;
    }
    if (password.length < 6) {
      setAlerta({
        msg: "la contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }
    setAlerta({});

    // crear el usuario en la api

    try {
      const url = "http://localhost:4000/api/veterinario";
      await axios.post(url, { nombre, email, password });
      setAlerta({ msg: "Cuenta creada correctamentamente", error: false });
    } catch (err) {
     setAlerta({ msg:err.response.data.msg, error:true });
    }
  };
  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Registrate y Administra tus {""}
          <spam className="text-black">Pacientes</spam>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {
          // condicional para mostrar alerta
          msg && <Alerta alerta={alerta} />
        }
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              type="text"
              placeholder="nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Repetir Password
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              type="password"
              placeholder=" Repetir Password"
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className=" w-full py-3 mt-5 rounded-xl uppercase font-bold bg-indigo-700 hover:cursor-pointer hover:bg-indigo-800 text-white md:w-auto px-10"
            value="Crear Cuenta"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray-500 hover:text-indigo-500"
            to="/"
          >
            ¿Ya tienes una cuenta? Inicia secion{" "}
          </Link>
          <Link
            className="block text-center my-5 text-gray-500 hover:text-indigo-500"
            to="/olvide-password"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Registar;
