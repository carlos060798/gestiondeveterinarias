import AdminNav from "../components/AdminNav";
function CambiarPasword() {
    return ( <>
        <AdminNav/>
        <h2  className="font-black text-3xl text-center mt-10">Cambiar Contraseña</h2>
        <p className="text-center mt-5">Modifica tu {}
        <span className="font-bold text-indigo-600">Contraseña aqui</span>
        </p>
    </> );
}

export default  CambiarPasword;