const User = require('../models/User');


exports.login = (req, res) => {
    return req.body
    // User.findOne((err, results) => {
    //     if (err) {
    //         return res.status(500).json({ error: err.message });
    //     }
    //     res.json(results);
    // });
};

exports.register = (req, res) => {
    User.create((err, req) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getAllUsersList = (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(results[0]);
    });
};

exports.createUser = (req, res) => {
    const data = req.body;
    User.create(data, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User created', id: results.insertId });
    });
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    User.update(id, data, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User updated' });
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.delete(id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User deleted' });
    });
};
