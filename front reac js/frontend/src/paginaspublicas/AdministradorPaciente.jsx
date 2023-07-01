import  {useState} from "react";
import FormularioPaciente from "../components/Formulario";
import ListadoPaciente from "../components/ListadoPacientes";

function AdministarPaciente() {
    const [mostrarFormulario, setMostarFormulario] = useState(false) //para mostrar el formulario
    return (  <>
      <div className="flex flex-col  md:flex-row">
        <button type="button" className=" bg-indigo-600  text-white font-bold  uppercase mx-10  p-3 rounded-md mt-10 md:hidden"
        onClick={()=>setMostarFormulario(!mostrarFormulario)}>
            {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}

        </button>
        <div className={ `${mostrarFormulario ? "block": "hidden"} md:block md:w-1/2 lg:w-2/5`}> 
          <FormularioPaciente/>
        </div>
            <div className={`md:w-1/2 lg:w-3/5`}> 
             <ListadoPaciente/>
            </div>
      </div>
    
    </>);
}

export default AdministarPaciente;