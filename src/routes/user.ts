import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        name : 'users router'
    });
});

export default router;