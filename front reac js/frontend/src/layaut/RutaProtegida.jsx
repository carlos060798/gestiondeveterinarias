import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";

/*
  {auth?._id ?(<main className="container  mx-auto mt-15"><Outlet /> </main>): <Navigate to="/" />} // si no hay datos del usuario redireccionamos al login
  */
function Rutaprotegida() {
  const { auth, cargando } = useAuth(); // obtenemos los datos del usuario y el estado de cargando
  if (cargando) return "cargando..."; // si esta cargando mostramos un mensaje

  return (
    <>
      <Header />
      {auth?._id ? (
        <main className="container  mx-auto mt-15">
          <Outlet />{" "}
        </main>
      ) : (
        <Navigate to="/" />
      )}

      <Footer />
    </>
  );
}

export default Rutaprotegida;
