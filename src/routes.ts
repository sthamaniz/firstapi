import { Router } from 'express';

import adminRouter from './routes/admin';
import userRouter from './routes/user';

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
router.use('/admins',adminRouter);

/**
 * get user router
 * 
 * GET /users
 */
router.use('/users', userRouter);

export default router;