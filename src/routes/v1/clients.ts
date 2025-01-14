import { Router } from 'express';

import { list, show, create, update, destroy } from '../../controllers/client';

const router = Router();

router.post('/', create);

router.get('/', list);

router.put('/:id([0-9]+)', update);

router.get('/:id([0-9]+)', show);

router.delete('/:id([0-9]+)', destroy);

export default router;
