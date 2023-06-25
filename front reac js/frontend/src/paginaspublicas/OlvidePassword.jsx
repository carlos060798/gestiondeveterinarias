import{Link} from 'react-router-dom';
import { useState } from 'react';
import Alerta from '../components/alerta';
import axios from 'axios';  


function OlvidePassword() {

// hooks para el manejo de los estados

const [email,setEmail]=useState('');
const [alerta,setAlerta]=useState({});


const handleenviarEmail=async(e)=>{
    e.preventDefault();
    console.log('enviando datos...');
    if(email=== ""|| email.length<7){
        setAlerta({msg:'el email es obligatorio',error:true});
        return;
    }
     try {
        const url='http://localhost:4000/api/veterinario/olvidarPassword';
        const  {data} = await axios.post(url,{email});
         console.log(data);
        setAlerta({msg:data.msg,});
     } catch (err) {
        setAlerta({msg:err.response.data.msg,error:true});
     }

    /*crear el usuario en la api
    try {
        const url='http://localhost:4000/api/veterinario';
        await axios.post(url,{email});
        setAlerta({msg:'Cuenta creada correctamentamente',error:false});
    } catch (err) {
        setAlerta({msg:err.response.data.msg,error:true});
    }*/
}

const {msg}= alerta;




    return (<>
        <div>
            <h1 className="text-indigo-600  font-black text-6xl">
                Recupera tu cuenta y Administra tus {""}
                <spam className="text-black">Pacientes</spam>
            </h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            {msg&& <Alerta alerta={alerta}/>}
            
            
            <form onSubmit={handleenviarEmail}>

                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Email
                    </label>
                    <input
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        type="email"
                        placeholder="introduce tu email de registro"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className=" w-full py-3 mt-5 rounded-xl uppercase font-bold bg-indigo-700 hover:cursor-pointer hover:bg-indigo-800 text-white md:w-auto px-10"
                    value="Recuperar Cuenta"
                />
            </form>
            <nav className='mt-10 lg:flex lg:justify-between'>
                <Link className='block text-center my-5 text-gray-500 hover:text-indigo-500' to="/">¿Ya tienes una cuenta? Inicia  secion </Link>
                <Link className='block text-center my-5 text-gray-500 hover:text-indigo-500' to="/Registar">¿No tienes una cuenta? Registrate </Link>            </nav>
        </div>
    </>);
}

export default OlvidePassword;