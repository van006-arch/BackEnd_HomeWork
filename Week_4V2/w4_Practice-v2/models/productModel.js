const products = [
    {id: 1, name: 'Laptop', price: 1200 },
    {id: 2, name: 'Phone', price: 800 }
];

export function getAllProducts() {
    return products;
}

export function findProductById(id) {
    return products.find(p => p.id === id);
}