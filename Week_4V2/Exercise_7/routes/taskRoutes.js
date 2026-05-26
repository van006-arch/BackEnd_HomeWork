import express from 'express';
import * as taskController from '../controllers/taskController.js';
import validateTask from '../middlesware/validateTask.js';

const router = express.Router();

router.get('/', taskController.listTasks);

router.post('/', validateTask, taskController.createTask);

export default router;