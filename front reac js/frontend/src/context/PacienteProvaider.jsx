//  context  para los componetes que nesesiten datos de los pacientes

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PacientesContext = createContext();
export default  PacientesContext 



const PacientesProvaider = ({children}) => {
    const [pacientes, setPacientes] = useState([])
    const GuardarPaciente= async(paciente)=>{
        try {
            const token= localStorage.getItem('token')             
            const  config={
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                }
            }

            const url = "http://localhost:4000/api/pacientes";

           const {data}= await axios.post(url, paciente, config);
              console.log(data)
              console.log(paciente)
            
           // setAlerta({ msg: "Cuenta creada correctamentamente", error: false });
          } catch (err) {
             console.log(err.response.data.msg)
           //setAlerta({ msg:err.response.data.msg, error:true });
          }
        };
        
    
    return (
        <PacientesContext.Provider value={{
            pacientes,
            GuardarPaciente
        }}>
            {children}
        </PacientesContext.Provider>

    )
}


export {PacientesProvaider}