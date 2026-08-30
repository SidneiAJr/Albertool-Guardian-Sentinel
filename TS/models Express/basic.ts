import {Router} from 'express';

const router = Router();

/*
====================
Rotas Vazias - GET
====================
*/
router.get('/:id');
router.get('/');

/*
====================
Rotas Vazias - POST
====================
*/

router.post('/');

/*
====================
Rotas Vazias - PUT & PATCH
====================
*/

router.put('/:id');
router.patch('/:id');

/*
====================
Rotas Vazias - DELETE
====================
*/

router.delete('/:id')


