import { Router } from 'express';

import * as adminController from '../controllers/admin';

const router = Router();

router.get('/', adminController.fetchAll);

export default router;