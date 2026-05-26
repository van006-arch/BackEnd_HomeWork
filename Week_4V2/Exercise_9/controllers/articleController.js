import * as articleModel from '../models/articleModel.js';

export const getArticles = (req, res) => res.json(articleModel.getAll());

export const getArticleById = (req, res) => {
    const article = articleModel.getById(Number(req.params.id));
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};

export const createArticle = (req, res) => {
    const article = articleModel.create(req.body);
    res,status(201).json(article);

};

export const updateArticle = (req, res) => {
    const article = articleModel.update(Number(req.params.id), req.body);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};

export const deleteArticle = (req, res) => {
    const success = articleModel.remove(Number(req.params.id));
    if (!succes) return res.status(404).json({ error: 'Article not found' });
    res.status(204).send();
};
