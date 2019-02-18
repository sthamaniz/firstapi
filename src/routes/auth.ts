import { Router } from 'express';

import { validateLogin } from '../validators/auth';
import { generateToken } from '../controllers/auth';

const router = Router();

/**
 * search the user according to the username and password
 * 
 POST /auth
 */
router.post('/', validateLogin, generateToken);

export default router;

