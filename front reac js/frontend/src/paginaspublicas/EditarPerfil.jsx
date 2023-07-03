import AdminNav from "../components/AdminNav";

function EditarPerfil() {
    return ( <>
        <AdminNav/>
        <h2  className="font-black text-3xl text-center mt-10">Edita tu Perfil</h2>
        <p className="text-center mt-5">Modifica tu {}
        <span className="font-bold text-indigo-600">Informacion aqui</span>
        </p>
    </> );
}

export default EditarPerfil;