import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Autlayaut from "./layaut/AuthLayaut";
import Login from "./paginaspublicas/Login";
import Registar from "./paginaspublicas/Registar";
import OlvidePassword from "./paginaspublicas/OlvidePassword";
import ConfirmarCuenta from "./paginaspublicas/Confirmarcuenta";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Autlayaut />}>
            <Route index element={<Login />} />
            <Route path="/Registar" element={<Registar />} /> 
            <Route path="/olvide-password" element={<OlvidePassword />} />
            <Route path="/Confirmar/:id" element={<ConfirmarCuenta/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
