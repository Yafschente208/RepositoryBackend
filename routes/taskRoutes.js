const express= require('express');
const { createTask, getAllTask, updateTask, deleteTask } = require('../controllers/taskController');
const router= express.Router();

router.post('/newTask', createTask);
router.get('/getBooks', getAllTask);
router.put("/actualizar/:id", updateTask);
router.delete("/task/:id", deleteTask);

module.exports = router;