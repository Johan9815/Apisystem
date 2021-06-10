const express = require('express');
const router = express.Router();
const Controller = require('../controller/controllerTasks');

router.post('/newtask',Controller.createTask)
router.get('/gettasks',Controller.findAllTasks);
router.put('/updatetask',Controller.updateTask);
router.delete('/deltetask/:id',Controller.delteTask);
module.exports = router