import { Router } from 'express';

import { createTodo, getTodos, patchTodos, deleteTodos } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', patchTodos);

router.delete('/:id', deleteTodos);

export default router;