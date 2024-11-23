const mysql = require('mysql2');
require('dotenv').config();

// Create a MySQL connection
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',     // Replace with your MySQL username
    password: process.env.MYSQL_SECRET || 'India@123456', // Replace with your MySQL password
    database: process.env.MYSQL_DB || 'store_management'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = connection;
