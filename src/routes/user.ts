import { Router } from 'express';

import * as userController from '../controllers/user';

const router = Router();

/**
 * fetch all users
 * 
 * GET /users
 */
router.get('/', userController.fetchAll);

/**
 * fetch user by id
 * 
 * GET /users/:id
 */
router.get('/:id', userController.fetchById);

/**
 * save user
 * 
 * POST /users
 */
router.post('/', userController.save);

/**
 * update user
 * 
 * POST /users/:id
 */
router.post('/:id', userController.update);

export default router;