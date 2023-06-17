# se inicia el proyecto con npm init 
se crea el package.json
se  escribe el comando npm start  para iniciar el servidor 
1-se instala express con 
--npm install express 
2- se agrega en el package.json  type:module para que reconozca los imports 
3- se instala nodemon para que se reinicie el servidor cada vez que se haga un cambio
-- npm i --save-dev nodemon 
se arranca con npm run dev

4- se instala mongoose para la conexion con la base de datos
--npm i mongoose 

5- se instala dotenv para las variables de entorno
--npm i dotenv

# estructura de carpetas
# index.js-> es el archivo principal
# config-> es la carpeta donde se configura la conexion con la base de datos 
# models-> es la carpeta donde se crean los modelos de la base de datos
models/veterinario.js-> es el modelo de veterinario en mongose