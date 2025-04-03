const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/create', taskController.createTask);
router.get('/:userId', taskController.getTasksByUser);
router.put('/:taskId', taskController.updateTask);

module.exports = router;
