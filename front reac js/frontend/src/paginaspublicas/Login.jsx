import {Link} from 'react-router-dom' // para manejar las rutas de la aplicacion en login  mejora el performance en lugar de a
function Login() {
  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          
          Inicia Sesion y Administrador de {""}
          <spam className="text-black">Pacientes</spam>
        </h1>
      </div>
      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
        <form>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              type="email"
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
