import * as productModel from '../models/productModel.js';

export const getProducts = (req, res) => {
    const data = productModel.getAllProducts();
    res.json(data);
};

export const getProductById = (req, res) => {
    const id = Number(req.params.id);
    const product = productModel.findProductById(id);

    if(!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};