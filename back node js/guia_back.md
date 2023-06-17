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
# routes-> es la carpeta donde se crean las rutas de la api
routes/veterinariosRoutes.js-> es la ruta de veterinarios 
# controllers-> es la carpeta donde se crean los controladores de la api
controllers/veterinariosControllers.js-> es el controlador de veterinarios 

# notas importantes

-- se debe elimianr la bases de datos que se crea cuando se inicia el servidor en mongoatlas direente ala que se creo en este caso era {test}
-- BROUSER COLECTION -> se elimina direcamente del servidor de mongo atlas
luego se desmonta el servidor y  se reinicia el servidor para que se cree la base de datos con el modelo de veterinario
