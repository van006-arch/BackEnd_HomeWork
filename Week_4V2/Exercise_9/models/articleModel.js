import { articles } from '../data.js';

export const getAll = () => articles;
export const getById = (id) => articles.find(a => a.id === id);
export const create = (data) => {
    const article = { id: articles.length + 1, ...data };
    articles.push(article);
    return article;
};
export const update = (id, data) => {
    const article = articles.find(a => a.id === id);
    if (!article) return null;
    Object.assign(article, data);
    return article;
};
export const remove = (id) => {
    const index = articles.findIndex(a => a.id === id);
    if (index === -1) return false;
    articles.splice(index, 1);
    return true;
};
export const getByJournalist = (journalistId) => articles.filter(a => a.jornalisId === jornalistId);
export const getByCategory = (categoryId) => articles.filter(a => a.categoryId === categoryId)