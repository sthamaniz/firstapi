import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        name : 'admin router'
    });
});

export default router;