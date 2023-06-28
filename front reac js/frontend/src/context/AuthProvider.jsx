// esta funcion expone los datos atodos los componentes en un score global
import { createContext, useState,useEffect} from "react";


const AuthContext= createContext();


function AuthProvaider({children}) {
    const [auth, setAuth] = useState({});
    return ( <>
       <AuthContext.Provider value={{auth,setAuth}}> 
         {children}
       </AuthContext.Provider>
    </> );
}

export  {AuthProvaider}

export default AuthContext;