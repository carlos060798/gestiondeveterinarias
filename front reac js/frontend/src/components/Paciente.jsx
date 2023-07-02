import usePacientes from "../hook/usePacientes";


function Paciente({ paciente }) {
  const { EditaPaciente,EliminarPaciente } = usePacientes();
  const { nombre, propietario, fecha, email, sintomas, _id } = paciente;
  const formatearFecha = (fecha) => {
    //  funcion para formatear la fecha
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset()); //ajusta la hora a la zona horaria
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };
  return (
    <>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounder-xl">
        <p className="font-bold uppercase text-indigo-600 my-2">
          Nombre:
          <span className="font-normal normal-case text-black"> {nombre}</span>
        </p>
        <p className="font-bold  uppercase text-indigo-600 my-2">
          Propietario:
          <span className="font-normal normal-case  text-black">
            {" "}
            {propietario}
          </span>
        </p>
        <p className="font-bold uppercase text-indigo-600 my-2">
          Email:
          <span className="font-normal normal-case  text-black"> {email}</span>
        </p>
        <p className="font-bold  uppercase text-indigo-600 my-2">
          Fecha:
          <span className="font-normal normal-case  text-black">
            {" "}
            {formatearFecha(fecha)}
          </span>
        </p>
        <p className="font-bold  uppercase text-indigo-600 my-2">
          Sintomas:
          <span className="font-normal normal-case  text-black">
            {" "}
            {sintomas}
          </span>
        </p>

        <div className="flex justify-between my-5">
          <button
            type="button"
            className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-lg text-white font-bold uppercase "
               onClick={() => EditaPaciente(paciente)}
         >
            Editar
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-bold uppercase"
             onClick={() => EliminarPaciente(_id)}
         >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
}

export default Paciente;
