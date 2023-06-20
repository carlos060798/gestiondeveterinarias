# DEPENCDENCIAS INSTALADAS
##  Instalación de tailwindcss para la maquetación de la aplicación

npm i --save-dev tailwindcss  postcss autoprefixer  

# instalacion de  react-router-dom para el manejo de rutas en la aplicación
npm i  react-router-dom  

# intalacion de npm i axios para el manejo de peticiones http con el backend que hizimos
--- npm i axios
# ESTRUCTURA DE CARPETAS
 src
    components-> componentes que se van a renderizar componentes de la aplicación de uso general
    paginaspublicas-> componentes que se van a renderizar en las rutas publicas y manejo de login y cuenta

# NOTAS DE DESARROLLO 

# 1 se instala via cd npx tailwindcss init -p  para crear archivos de configuracion para el uso de  tailwindcss

se modifica esta dependencia de  tailwind.config.js  para que se pueda utilizar en el proyecto
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
luego en el index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# funcionamiento del enrutamiento en react-router-dom
importaciones nesesarias para el funcionamiento de react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

este es el codigo base 
   <Router>
        <Routes>
          <Route path="/" element={<Autlayaut/> } >
             <Route index element={<Login/>} />
          </Route>
        </Routes>
      </Router> 
atributos que maneja
path: es el path de la ruta
element: es el componente que se va a renderizar
index: es para que se renderize el componente exactamente en la ruta que se le indica 

en este ejemplo  el Outlet es el componente que se va a renderizar en el componente Autlayaut que va a ser el componente padre y el intermediador de todas las rutas que se van a renderizar en esa direccion
import { Outlet } from "react-router-dom";
function Autlayaut() {
    return ( 
    <> 
    <h1> DESDE Autlayaut</h1>
    <Outlet/>
    </>
     );
}

export default Autlayaut;
