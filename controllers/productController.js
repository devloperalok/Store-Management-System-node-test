const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    const id = req.params.id;
    Product.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(results[0]);
    });
};

exports.createProduct = (req, res) => {
    const data = req.body;
    Product.create(data, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Product created', id: results.insertId });
    });
};

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Product.update(id, data, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Product updated' });
    });
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.delete(id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Product deleted' });
    });
};
