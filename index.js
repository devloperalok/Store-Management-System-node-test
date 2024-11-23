const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./config/db');
require('dotenv').config();

const sequelize = require('./models/index');

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// // Sync all models
// sequelize.sync({ force: false }) // Set to true to drop and recreate tables
//     .then(() => {
//         console.log('Database & tables synced!');
//     })
//     .catch(err => {
//         console.error('Error syncing database:', err);
//     });

// Import Routes
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Use Routes
app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Store Management API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
