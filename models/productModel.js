const db = require('../config/db');

class Product {
    static getAll(callback) {
        db.query('SELECT * FROM products', callback);
    }

    static getById(id, callback) {
        db.query('SELECT * FROM products WHERE id = ?', [id], callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO products SET ?', data, callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE products SET ? WHERE id = ?', [data, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM products WHERE id = ?', [id], callback);
    }
}

module.exports = Product;
