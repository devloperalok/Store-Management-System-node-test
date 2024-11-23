const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// CRUD Routes for Categories
router.get('/user', UserController.getAllUsersList);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
