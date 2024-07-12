import express from 'express';

const router = express.Router();

router.get("/singup",(req, res) => {
    res.json({
        data: "You hit the sing up endpoint",
    });
});

export default router;