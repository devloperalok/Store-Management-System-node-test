const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

// CRUD Routes for Categories
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/forgot/:id', AuthController.forgot);
router.post('/reset/:id', AuthController.reset);

module.exports = router;
