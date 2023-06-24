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

6 se instala bcrypt para encriptar las contraseñas
--npm i bcrypt
7 se instala jsonwebtoken para generar el token
--npm i jsonwebtoken

8- se instala   nodemailer para enviar correos
--npm i nodemailer

# estructura de carpetas

# index.js-> es el archivo principal
# config-> es la carpeta donde se configura la conexion con la base de datos 
# models-> es la carpeta donde se crean los modelos de la base de datos
models/veterinario.js-> es el modelo de veterinario en mongose 
models/pacientes.js-> es el modelo de pacientes en mongose
# routes-> es la carpeta donde se crean las rutas de la api
routes/veterinariosRoutes.js-> es la ruta de veterinarios 
routes/pacientesRoutes.js-> es la ruta de pacientes
# controllers-> es la carpeta donde se crean los controladores de la api
controllers/veterinariosControllers.js-> es el controlador de veterinarios 
controllers/veterinariosControllers.js-> es el controlador de pacientes de
# helpers-> es la carpeta donde se crean las funciones de ayuda
generarid.js-> es la funcion que genera el id de la base de datos
genrerarJWT.js-> es la funcion que genera el token 

# middlewares-> es la carpeta donde se crean los middlewares de la api
auth.js->  maneja la intermediacion de la ruta del perfil de usuario


# notas importantes

# 1 -- se debe eliminar la bases de datos que se crea cuando se inicia el servidor en mongoatlas direente ala que se creo en este caso era {test}
-- BROUSER COLECTION -> se elimina direcamente del servidor de mongo atlas
luego se desmonta el servidor y  se reinicia el servidor para que se cree la base de datos con el modelo de veterinario


# 2 -- se debe crear  una nueva variable de entorno en el archivo .env llamada  JWT_SECRET y se le asigna un valor  para que funcione  JWT en la funcion de genrarJWR

# 3-- los middlewares son funciones que se ejecutan antes de que lleguen a las rutas finales para generar una maniculacion entre la peticion y la respuesta se consideran intermediadores 

# 4 -- recordar que en este modelo de base de datos la relacion es veterinario crea pacientes por ende al crear los pasientes se debe referenciar el id de veterinario que lo creo ylo trata esa se considera la llave primaria entre el modelo de veterinario y paciente 
