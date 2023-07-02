//  context  para los componetes que nesesiten datos de los pacientes

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PacientesContext = createContext(); //context  para los componetes que nesesiten datos de los pacientes
export default PacientesContext;

const PacientesProvaider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]); //state para los pacientes
  const [paciente, setPaciente] = useState({}); //state para un paciente


    useEffect(() => { //useEffect para obtener los pacientes cuando se monte el componete
      const obtenerPacientes = async () => { //funcion para obtener los pacientes de la lista 
        try {
          const token = localStorage.getItem("token"); //obtenemos el token del localstorage
           if(!token) return; //si no hay token no hacemos nada
            const config = {  
                //configuracion para el axios
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
            const url = "http://localhost:4000/api/pacientes"; //url para el axios
            const { data } = await axios.get(url, config); //hacemos la peticion get con axios
            setPacientes(data); //agregamos los pacientes al state
        }catch (err) {
          console.log(err.response.data.msg);
        }

      }
        obtenerPacientes();
    }, []);

  const GuardarPaciente = async (paciente) => {
    //funcion para guardar los pacientes
    if(paciente._id){ //si el paciente tiene un id es porque ya existe y se va a editar
      console.log("editar paciente");
    } else { 
      console.log("nuevo paciente");
    }//si el paciente no tiene id es porque es nuevo y se va a crear
    
    return
    
    
    try {
      const token = localStorage.getItem("token"); //obtenemos el token del localstorage
      const config = {
        //configuracion para el axios
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const url = "http://localhost:4000/api/pacientes"; //url para el axios

      const { data } = await axios.post(url, paciente, config); //hacemos la peticion post con axios
      const { createdAt, updatedAt, __v, ...pacienteNuevo } = data; //desestructuramos la respuesta de la peticion post
      setPacientes([pacienteNuevo, ...pacientes]); //agregamos el nuevo paciente al state

      // setAlerta({ msg: "Cuenta creada correctamentamente", error: false });
    } catch (err) {
      console.log(err.response.data.msg);
      //setAlerta({ msg:err.response.data.msg, error:true });
    }
  };
  const  EditaPaciente=(paciente)=>{
    //funcion para editar los pacientes
    setPaciente(paciente); //agregamos el paciente al state
  }
  return (
    <PacientesContext.Provider
      value={{
        pacientes,
        paciente,
        GuardarPaciente,
        EditaPaciente
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export { PacientesProvaider };
