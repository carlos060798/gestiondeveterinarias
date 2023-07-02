import usePacientes from "../hook/usePacientes";
import Paciente from "./Paciente";

function ListadoPaciente() {
  const { pacientes } = usePacientes();
  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className=" font-black text-3xl text-center">
            Lista de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600">Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente._id} paciente={paciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className=" font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            comienza agregando pacientes {""}
            <span className="text-indigo-600">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </>
  );
}

export default ListadoPaciente;
