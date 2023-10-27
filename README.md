# Proyecto de Gestión de Pacientes de Veterinaria

Este proyecto utiliza el stack MERN para crear un sistema de gestión de pacientes en una clínica veterinaria. Proporciona características clave de autenticación, validación de correo electrónico, operaciones CRUD para pacientes, relaciones con veterinarios y restricciones de usuario.

## Características Principales

- **Autenticación con JWT:** Los usuarios pueden registrarse e iniciar sesión de forma segura con JSON Web Tokens para acceder a las funciones del sistema.

- **Validación de Correo Electrónico:** Se envía un correo de verificación al registrarse para garantizar la autenticidad del usuario.

- **CRUD de Pacientes:** Los usuarios pueden crear, leer, actualizar y eliminar registros de pacientes.

- **Relaciones Veterinario-Paciente:** Cada paciente puede estar asociado a uno o varios veterinarios y viceversa. Esto permite un seguimiento eficiente de la atención médica.

- **Restricciones de Usuario:** Los usuarios solo pueden ver, editar y eliminar los registros de pacientes que han creado o están asociados a través de la relación veterinario-paciente.

## Tecnologías Utilizadas

- **MongoDB:** Base de datos para almacenar información de pacientes, veterinarios y usuarios.

- **Express:** Framework de Node.js para construir el backend del sistema.

- **React:** Biblioteca para crear la interfaz de usuario.

- **Node.js:** Entorno de ejecución del lado del servidor.

- **JWT:** JSON Web Tokens para autenticación y seguridad.

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local.

2. En el directorio raíz, ejecuta `npm install` para instalar las dependencias del servidor.

3. Ve al directorio `client` y ejecuta `npm install` para instalar las dependencias del cliente.

4. Asegúrate de tener una instancia de MongoDB en ejecución y configura la conexión en el archivo de configuración.

5. En el directorio raíz, ejecuta `npm run dev` para iniciar tanto el servidor como el cliente.

6. Abre un navegador web y accede a `http://localhost:3000` para utilizar la aplicación.

## Contribuciones

Si deseas contribuir a este proyecto, no dudes en enviar solicitudes de extracción o informar problemas. ¡Tu ayuda es bienvenida!

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
