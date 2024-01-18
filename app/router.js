const router = require('express').Router();
const appController = require('./controllers/appController');
const authController = require('./controllers/authController');

router.get('/', appController.index);

router.get('/register', authController.registerForm);

module.exports = router;