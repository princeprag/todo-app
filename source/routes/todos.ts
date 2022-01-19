import express from 'express';
import controller from '../controllers/todo';

const router = express.Router();
router.get('/get/todos', controller.getAllTodo);
router.post('/create/todos', controller.createTodo);
router.delete('/delete/todos', controller.deleteTodo);
router.put('/update/todos', controller.updateTodo);

export = router;
