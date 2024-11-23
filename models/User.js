const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// Define the User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = User;
