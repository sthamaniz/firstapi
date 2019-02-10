import { Router } from 'express';

import adminRouter from './routes/admin';
import userRouter from './routes/user';

import { checkAccessToken } from './validators/accestoken';

const router = Router();

/**
 * get the info on start page
 */
router.get('/', (req, res) => {
    res.json({
        name: 'test api'
    });
});

/**
 * get admins router 
 * 
 * GET /admins
 */
router.use('/admins', checkAccessToken, adminRouter);

/**
 * get user router
 * 
 * GET /users
 */
router.use('/users', userRouter);

export default router;