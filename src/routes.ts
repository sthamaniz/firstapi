import { Router } from 'express';

import adminRouter from './routes/admin';
import userRouter from './routes/user';
import authRouter from './routes/auth';

import { accessTokenValidation } from './validators/accesstoken';
import { adminRouteValidation } from './validators/route';

const router = Router();

/**
 * get the info on start page
 */
router.get('/info', (req, res) => {
    res.json({
        name: 'first api',
        message: 'this is the first api'
    });
});

/**
 * auth router
 * 
 * auth
 */
router.use('/auth', authRouter);

/**
 * admins router 
 * 
 * /admins
 */
router.use('/admins', accessTokenValidation, adminRouteValidation, adminRouter);

/**
 * user router
 * 
 * /users
 */
router.use('/users', accessTokenValidation, userRouter);

export default router;