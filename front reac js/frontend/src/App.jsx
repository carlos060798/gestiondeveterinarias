import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Autlayaut from "./layaut/AuthLayaut";
import Login from "./paginaspublicas/Login";
import Registar from "./paginaspublicas/Registar";
import OlvidePassword from "./paginaspublicas/OlvidePassword";
import ConfirmarCuenta from "./paginaspublicas/Confirmarcuenta";
import NuevoPass from "./paginaspublicas/NuevoPassword";
// import AuthContext  se genera la propagacion de  los datos la autenticacion
import { AuthProvaider } from "./context/AuthProvider";
function App() {
  return (
    <>
      <Router>
       <AuthProvaider>
        <Routes>
          <Route path="/" element={<Autlayaut />}>
            <Route index element={<Login />} />
            <Route path="/Registar" element={<Registar />} /> 
            <Route path="/olvide-password" element={<OlvidePassword />} />
            <Route path="/olvide-password/:token" element={<NuevoPass />} />

            <Route path="/Confirmar/:id" element={<ConfirmarCuenta/>} />
          </Route>
        </Routes>
        </AuthProvaider>
      </Router>
    </>
  );
}

export default App;
