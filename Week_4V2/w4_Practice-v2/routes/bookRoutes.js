import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json([{ id: 1, title: 'Clean Book' }]);
});

router.post('/', (req, res) => {
    const newBook = req.body;
    res.status(201).json({ message: 'Book Created', book: newBook});
});

export default router; 