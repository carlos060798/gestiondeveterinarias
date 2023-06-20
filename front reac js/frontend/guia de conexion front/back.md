# dependecias para instalar
  # frontend

  # backend
   npm i cors


# notas de desarrollo de la guia de conexion front\back 
para evitar este error de bloqueo de cors en el navegador se debe instalar la dependencia cors en el backend

Registar:1 Access to XMLHttpRequest at 'http://localhost:4000/api/veterinarios' from origin 'http://127.0.0.1:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

# para evitar este error de bloqueo de cors en el navegador 
Access to XMLHttpRequest at 'http://localhost:4000/api/veterinario' from origin 'http://127.0.0.1:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
Registar.jsx:43 error : AxiosError {message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK', config: {…}, request: XMLHttpRequest, …}

# se debe agregar una  linea de codigo en el backend en el archivo index.js para dar solucion al problema de cors por que se da la intermediacion del  El código app.use(cors({ origin: '*' })) se está usando el middleware "cors" para permitir el compartimiento de recursos a través de orígenes cruzados. La opción origin: ' permite que cualquier origen haga solicitudes a la aplicación. Si desea restringir el acceso a ciertos orígenes específicos, puede especificar una lista de ellos en lugar de  "http://localhost:3000/".

Al usar este middleware, se está permitiendo que las solicitudes se realicen desde cualquier origen, lo que debería solucionar el error de CORS que estabas experimentando
app.use(cors({ origin: '*' }))
