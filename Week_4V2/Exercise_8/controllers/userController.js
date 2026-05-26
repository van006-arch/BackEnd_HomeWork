import * as userModel from '../models/userModel.js';

export const getUsers = (req, res) => {
    res.json(userModel.getAll());
};

export const getUserById = (req, res) => {
    const user = userModel.getById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const createUser = (req, res) => {
    const newUser = userModel.create(req.body);
    res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
    const user = userModel.update(parseInt(req.params.id), req.body);
    if (!user) return res.status(404).json({ error: 'User not found'});
};

export const deleteUser = (req, res) => {
    const success = userModel.remove(parseInt(req.params.id));
    if (!success) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
}