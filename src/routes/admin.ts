import { Router } from 'express';

import * as adminController from '../controllers/admin';

const router = Router();

/**
 * fetch all admins
 * 
 * GET /admins
 */
router.get('/', adminController.fetchAll);

/**
 * fetch admin by id
 * 
 * GET /admins/:id
 */
router.get('/', adminController.fetchById);

/**
 * save admin
 * 
 * POST /admins
 */
router.post('/', adminController.save);

/**
 * update admin
 * 
 * PUT /admins
 */
router.put('/', adminController.update);

export default router;