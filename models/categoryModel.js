const db = require('../config/db');

class Category {
    static getAll(callback) {
        db.query('SELECT * FROM categories', callback);
    }

    static getById(id, callback) {
        db.query('SELECT * FROM categories WHERE id = ?', [id], callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO categories SET ?', data, callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE categories SET ? WHERE id = ?', [data, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM categories WHERE id = ?', [id], callback);
    }
}

module.exports = Category;
