const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance
const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_SECRET,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        port: process.env.MYSQL_PORT,
    }
);

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;