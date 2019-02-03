import { Router } from 'express';

import * as adminController from '../controllers/admin';

const router = Router();

/**
 * fetch all admins
 * 
 * GET /admins
 */
router.get('/', adminController.fetchAll);

export default router;