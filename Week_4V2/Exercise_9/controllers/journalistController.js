import * as journalistModel from '../models/journalistModel.js';
import * as articleModel from '../models/articleModel.js';

export const getJournalists = (req, res) => res.json(journalistModel.getAll());

export const getJournalistById = (req, res) => {
    const journalist = journalistModel.getById(Number(req.params.id));
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};

export const createJournalist = (req, res) => {
    const journalist = journalistModel.create(req.body);
    res.status(201).json(journalist);
};

export const updateJournalist = (req, res) => {
    const journalist = journalistModel.update(Number(req.params.id), req.body);
    if (!journalist) return res.status(404).json({ error:'Journalist not found' });
    res.json(journalist);
};

export const deleteJournalist = (req, res) => {
    const success = journalistModel.remove(Number(req.params.id));
    if (!success) return res.status(404).json({ error: 'Journalist not found' });
    res.status(204).send();
};

export const getArticlesByJournalist = (req, res) => {
    const journalist = journalistModel.getById(Number(req.params.id));
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(articleModel.getByJournalist(Number(req.params.id)));
};