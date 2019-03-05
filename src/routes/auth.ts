import { Router } from 'express';

import { validateLogin } from '../validators/auth';
import { generateToken } from '../controllers/auth';
import { validateLoginSchema } from '../validators/schemaValidators/auth';

const router = Router();

/**
 * search the user according to the username and password
 * 
 POST /auth
 */
router.post('/', validateLoginSchema, validateLogin, generateToken);

export default router;

