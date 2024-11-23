const User = require('../models/User');


exports.login = (req, res) => {
    console.log(req.body);
    res.status(200).json('Hi');
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

exports.reset = (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.forgot = (req, res) => {
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