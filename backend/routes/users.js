const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { body } = require('express-validator');
const errorMessagehanlder = require('../Middleware/handleErrorMessage')
router.post('/login', UserController.login);
router.post('/register', [
        body('name').notEmpty(),
        body('email').notEmpty(),
        body('password').notEmpty(),
    ],errorMessagehanlder,UserController.register);

module.exports = router;