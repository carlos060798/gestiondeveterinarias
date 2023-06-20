import {Link} from "react-router-dom";
function Registar() {
  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Registrate y Administra tus {""}
          <spam className="text-black">Pacientes</spam>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              type="text"
              placeholder="nombre completo"
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
            />
          </div>
          <input
            type="submit"
            className=" w-full py-3 mt-5 rounded-xl uppercase font-bold bg-indigo-700 hover:cursor-pointer hover:bg-indigo-800 text-white md:w-auto px-10"
            value="Crear Cuenta"
          />
        </form>
        <nav className='mt-10 lg:flex lg:justify-between'>
         <Link className='block text-center my-5 text-gray-500 hover:text-indigo-500' to="/Registar">¿Ya tienes una cuenta? Inicia  secion </Link>
         <Link className='block text-center my-5 text-gray-500 hover:text-indigo-500' to="/olvide-password">¿Olvidaste tu contraseña?</Link>
        </nav>
      </div>
    </>
  );
}

export default Registar;
