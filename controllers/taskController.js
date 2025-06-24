const { createClient } = require('@supabase/supabase-js');
// Importa la librería de cliente de Supabase para interactuar con la base de datos
// La librería supabase-js permite interactuar con la base de datos de Supabase desde el backend de Node.js
const supabaseAdmin = require('../supabaseClient'); // Importa el cliente de Supabase configurado en supabaseClient.js

require('dotenv').config();

const supabaseAnonClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY// esta variable SUPABASE_SERVICE_ROLE_KEY sirve para autenticar al usuario anonimo
);

exports.createTask = async (req, res) => {
  console.log('Se recibió una nueva tarea');
  console.log(req.body); // ver qué llega

  const { nombre, descripcion, prioridad, fecha_entrega, hora_entrega, completada } = req.body;

  const { data, error } = await supabaseAnonClient.from("tareas").insert([
    { nombre, descripcion, prioridad, fecha_entrega, hora_entrega, completada }]
  );

  if (error) return res.status(500).json({
    error: error.message
  });
  res.status(201).json(data);
  return res;
}


exports.getAllTask = async (req, res) => {
  const { data, error } = await supabaseAnonClient.from("tareas").select("*");
  if (error) return res.status(500).json({
    error: error.message
  });
  res.json({ data });
  return res;
};

// actualizar un libro
exports.updateTask = async (req, res) => {
  const { id } = req.params;// Extrae el ID de la tarea desde los parámetros de la solicitud
  // Extrae el ID de la tarea desde los parámetros de la solicitud
  const { completada } = req.body;

  const { data, error } = await supabaseAnonClient
    .from("tareas").update({ completada }).eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// eliminar un libro
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabaseAnonClient.from("tareas").delete().eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
};