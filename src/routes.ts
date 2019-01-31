import { Router } from 'express';

import adminRouter from './routes/admin';
import userRouter from './routes/user';

const router = Router();

// load the starting page
router.get('/', (req, res) => {
    res.json({
        name: 'test api'
    });
});

// use the admin router
router.use('/admins',adminRouter);

// use the user router
router.use('/users', userRouter);

export default router;