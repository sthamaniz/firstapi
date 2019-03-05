import { Router } from 'express';

import * as userController from '../controllers/user';

import { userValidator, userSchemaValidator } from '../validators/user';
 
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
router.get('/:id', userValidator, userController.fetchById);

/**
 * save user
 * 
 * POST /users
 */
router.post('/', userSchemaValidator, userController.save);

/**
 * update user
 * 
 * PUT /users/:id
 */
router.put('/:id', userValidator, userController.update);

export default router;