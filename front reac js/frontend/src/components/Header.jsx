import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";

function Header() {
  const{cerrarSesion}=useAuth();
  return (
    <>
      <header className="py-10 bg-indigo-600">
        <div className="container  mx-auto flex flex-col lg:flex-row justify-between items-center">
          <h1 className="font-bold text-2xl text-indigo-200 text-center">
            Admistardor de Pacientes de {""} <span> Veterinaria</span>
          </h1>
          <nav className="flex flex-col item-center lg:flex-row  gap-4 mt5 lg:mt-0">
            <Link to="/admin" className="text-white  text-sm uppercase">
              Pacientes
            </Link>
            <Link
              to="/admin/perfil"
              className="text-white font-bold text-sm uppercase"
            >
              Perfil
            </Link>

            <button
              type="button"
              className="text-white font-bold text-sm uppercase"
              onClick={cerrarSesion}
            >
              Cerrar seccion
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
