const express = require('express'); // Importa la librería Express para crear el servidor web
// Express es un framework de Node.js que facilita la creación de aplicaciones web y APIs

const cors = require('cors'); // Importa la librería CORS para permitir solicitudes desde diferentes orígenes
// CORS (Cross-Origin Resource Sharing) es un mecanismo que permite controlar qué recursos pueden ser accedidos desde diferentes dominios
// Esto es útil para permitir que tu frontend (que puede estar en un dominio diferente) acceda a tu backend sin problemas de seguridad.

require('dotenv').config(); // Carga las variables de entorno desde un archivo .env
// dotenv es una librería que permite cargar variables de entorno desde un archivo .env

const app = express(); // Esto envolvera todo el backend
app.use(cors()); // Permite el acceso desde cualquier origen
app.use(express.json()); // Permite el manejo de JSON en las peticiones
//  y express.json hace que express pueda entender el cuerpo de las peticiones en formato JSON

const authRoutes = require('./routes/authRoutes'); // Importa las rutas de autenticación
app.use('/api/auth', authRoutes); // Configura las rutas de autenticación para que estén disponibles bajo el prefijo /api

const taskRoutes = require('./routes/taskRoutes'); // Importa las rutas de tareas
app.use('/api/tasks', taskRoutes); // Configura las rutas de tareas para que estén disponibles bajo el prefijo /api/tasks

const PORT = process.env.PORT || 3001; // Define el puerto en el que el servidor escuchará las peticiones
// process.env.PORT permite que el puerto sea configurado a través de una variable de entorno,
app.listen( PORT , () => { // Inicia el servidor en el puerto 3000 para escuchar peticiones y tambien para enviar respuestas
    console.log(`Servicios corriendo en el puerto ${PORT}`); // Muestra un mensaje en la consola indicando que el servidor está corriendo
});