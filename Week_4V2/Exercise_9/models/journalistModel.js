import { journalists } from '../data.js';

export const getAll = () => journalists;
export const getById = (id) => journalists.find(j => j.id === id);
export const create = (data) => {
    const journalist = { id: journalists.length + 1, ...data};
    journalists.push(journalist);
    return journalist;
};
export const update = (id, data) => {
    const journalist = journalists.find(j => j.id === id);
    if (!journalist) return null;
    Object.assign(journalist, data);
    return journalist;
};
export const remove = (id) => {
    const index = journalists.findIndex(j => j.id === id);
    if (index === -1) return false;
    journalists.splice(index, 1);
    return true;
};