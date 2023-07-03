//  context  para los componetes que nesesiten datos de los pacientes

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PacientesContext = createContext(); //context  para los componetes que nesesiten datos de los pacientes
export default PacientesContext;

const PacientesProvaider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]); //state para los pacientes
  const [paciente, setPaciente] = useState({}); //state para un paciente

  useEffect(() => {
    //useEffect para obtener los pacientes cuando se monte el componete
    const obtenerPacientes = async () => {
      //funcion para obtener los pacientes de la lista
      try {
        const token = localStorage.getItem("token"); //obtenemos el token del localstorage
        if (!token) return; //si no hay token no hacemos nada
        const config = {
          //configuracion para el axios
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const url = "http://localhost:4000/api/pacientes"; //url para el axios
        const { data } = await axios.get(url, config); //hacemos la peticion get con axios
        setPacientes(data); //agregamos los pacientes al state
      } catch (err) {
        console.log(err.response.data.msg);
      }
    };
    obtenerPacientes();
  }, []);

  const GuardarPaciente = async (paciente) => {

    //funcion para guardar los pacientes
    const token = localStorage.getItem("token"); //obtenemos el token del localstorage
    const config = {
      //configuracion para el axios
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (paciente.id) {
      try{
           //si el paciente tiene un id es porque ya existe y se va a editar
      const url = `http://localhost:4000/api/pacientes/${paciente.id}`; //url para el axios
      const { data } = await axios.put(url, paciente, config); //hacemos la peticion post con axios
      const pacientesActualizados = pacientes.map(pacientestate => pacientestate._id === data._id ? data : pacientestate ); //recorremos los pacientes para buscar el que se edito
      setPacientes(pacientesActualizados); //actualizamos el state de los pacientes
      }
      catch (err) {
        console.log(err.response.data.msg);
      }
   
    } else {
      try {
        const url = "http://localhost:4000/api/pacientes"; //url para el axios
        const { data } = await axios.post(url, paciente, config); //hacemos la peticion post con axios
        const { createdAt, updatedAt, __v, ...pacienteNuevo } = data; //desestructuramos la respuesta de la peticion post
        setPacientes([pacienteNuevo, ...pacientes]); //agregamos el nuevo paciente al state
      } catch (err) {
        console.log(err.response.data.msg);
      }
    }
  };
  
   //funcion para editar los pacientes
  const EditaPaciente = (paciente) => {
    //funcion para editar los pacientes
    setPaciente(paciente); //agregamos el paciente al state
  };

  //funcion para eliminar los pacientes
  const EliminarPaciente = async  (id) => {
    const  confirmar= confirm('¿Estas seguro de eliminar el paciente?'); //confirmamos si se quiere eliminar el paciente
    if(confirmar){ //si se confirma la eliminacion
      try{
        const token = localStorage.getItem("token"); //obtenemos el token del localstorage
        const config = {
          //configuracion para el axios
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }  
        const url = `http://localhost:4000/api/pacientes/${id}`;
        const {data} = await axios.delete(url, config); //hacemos la peticion delete con axios
        const pacientesActualizados = pacientes.filter(pacientestate => pacientestate._id !== id); //recorremos los pacientes para buscar el que se elimino
        setPacientes(pacientesActualizados); //actualizamos el state de los pacientes
      } catch (err) {
        console.log(err.response.data.msg);
      }
    }
  }
  
  return (
    <PacientesContext.Provider
      value={{
        pacientes,
        paciente,
        GuardarPaciente,
        EditaPaciente,
        EliminarPaciente,
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export { PacientesProvaider };
