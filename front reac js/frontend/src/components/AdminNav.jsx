import { Link } from "react-router-dom"; 

function AdminNav() {
    return (<>
      <nav className="flex gap-3">
        <Link to="/admin/perfil" className="text-gray-500   uppercase">
        Perfil</Link>
        <Link to="/admin/cambiar-password" className="text-gray-500 uppercase ">Cambiar Contraseña</Link>
      </nav>
    </>  );
}

export default AdminNav;