import express from 'express';
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Requested user with ID: ${id}`);
});

export default router; 