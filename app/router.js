const router = require('express').Router();
const appController = require('./controllers/appController');
const authController = require('./controllers/authController');
const sessionController = require('./controllers/sessionController');
const { catchErrors } = require('../middlewares/errorHandler');

router.get('/', appController.index);

router.get('/register', authController.registerForm);
router.post('/register', catchErrors(authController.register));

router.get('/login', sessionController.loginForm);
router.post('/login', catchErrors(sessionController.login));

router.get('/logout', sessionController.destroy);

router.get('/draw', appController.displayDraw);
router.post('/draw', catchErrors(appController.createDataFromForm));

router.get('/result/:id', catchErrors(appController.showResult));



module.exports = router;