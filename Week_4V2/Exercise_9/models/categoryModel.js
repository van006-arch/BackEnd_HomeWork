import { categories } from '../data.js';

export const getAll = () => categories;
export const getById = (id) => categories.find(c => c.id === id);
export const create = (data) => {
    const category = { id: categories.length + 1, ...data };
    categories.push(category);
    return category;
};
export const update = (id, data) => {
    const category = categories.find(c => c.id === id);
    if (!category) return null;
    Object.assign(category, data);
    return category;
};
export const remove = (id) => {
    const index = categories.findIndex(c => c.id === id);
    if (index === -1) return false;
    categories.splice(index, 1);
    return true;
};