function FormularioPaciente() {
  return (
    <>
      <p className="text-lg text-center mb-10">
        Crea tus Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white py-10 px-5  mb-10 lg:mb-0  shadow-md rounded-md">
        <div className="mb-5">
          <label
            htmlFor="mascota
          "
            className="text-gray-700 uppercase font-bold"
          >
            Nombre de la Mascota:
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario
          "
            className="text-gray-700 uppercase font-bold"
          >
            Nombre Propietario:
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="correo
          "
            className="text-gray-700 uppercase font-bold"
          >
            Correo Propietario:
          </label>
          <input
            id="correo"
            type="email"
            placeholder="correo@gmail.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha
          "
            className="text-gray-700 uppercase font-bold"
          >
            Fecha de Alta:
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas
          "
            className="text-gray-700 uppercase font-bold"
          >
            Sintomas:
          </label>
          <textarea
            id="sintomas"
             placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md"
          />
        </div>
       
          <input
            
            type="submit"
            value="Agregar Paciente"
            className="bg-indigo-600 w-full mt-5 p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer
            transition duration-300 ease-in-out"
          />
      
      </form>
    </>
  );
}

export default FormularioPaciente;