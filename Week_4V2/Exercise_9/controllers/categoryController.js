import * as categoryModel from '../models/categoryModel.js';
import * as articleModel from '../models/articleModel.js';

export const getCategories = (req, res) => res.json(categoryModel.getAll());

export const getCategoryById = (req, res) => {
    const category = categoryModel.getById(Number(req.params.id));
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};

export const createCategory = (req, res) => {
    const category = categoryModel.create(req.body);
    res.status(201).json(category);
};

export const updateCategory = (req, res) => {
    const category = categoryModel.update(Number(req.params.id), req.body);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category); 
};

export const deleteCategory = (req, res) => {  
    const success = categoryModel.remove(Number(req.params.id));
    if (!success) return res.status(404).json({ error: 'Category not found' });
    res.status(204).send();
};

export const getArticlesByCategory = (req, res) => {
    const category = categoryModel.getById(Number(req.params.id));
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(articleModel.getByCategory(Number(req.params.id)));
};