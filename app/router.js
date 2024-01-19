const router = require('express').Router();
const appController = require('./controllers/appController');
const authController = require('./controllers/authController');
const sessionController = require('./controllers/sessionController');

router.get('/', appController.index);

router.get('/register', authController.registerForm);
router.post('/register', authController.register);

router.get('/login', sessionController.loginForm);
router.post('/login', sessionController.login);

router.get('/logout', sessionController.destroy);

module.exports = router;