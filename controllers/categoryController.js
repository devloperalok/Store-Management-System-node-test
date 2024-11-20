const Category = require('../models/categoryModel');

exports.getAllCategories = (req, res) => {
    Category.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getCategoryById = (req, res) => {
    const id = req.params.id;
    Category.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(results[0]);
    });
};

exports.createCategory = (req, res) => {
    const data = req.body;
    Category.create(data, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Category created', id: results.insertId });
    });
};

exports.updateCategory = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Category.update(id, data, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Category updated' });
    });
};

exports.deleteCategory = (req, res) => {
    const id = req.params.id;
    Category.delete(id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Category deleted' });
    });
};
