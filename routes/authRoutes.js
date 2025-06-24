const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');// Importa el controlador de autenticación

// Define las rutas de autenticación 
router.post('/register', authController.registerUser); // Ruta para registrar un nuevo usuario
router.post('/login', authController.loginUser); // Ruta para iniciar sesión de un usuario

module.exports = router; // Exporta el router para que pueda ser utilizado en otros archivos
// Este archivo define las rutas relacionadas con la autenticación de usuarios