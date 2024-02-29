const router = require('express').Router();
const appController = require('./controllers/appController');
const authController = require('./controllers/authController');
const sessionController = require('./controllers/sessionController');
const { catchErrors } = require('../middlewares/errorHandler');
const drawController = require('./controllers/drawController');

router.get('/', appController.index);

router.get('/register', catchErrors(authController.registerForm));
router.post('/register', catchErrors(authController.register));

router.get('/login', catchErrors(sessionController.loginForm));
router.post('/login', catchErrors(sessionController.login));

router.get('/logout', catchErrors(sessionController.destroy));

router.get('/draw', catchErrors(appController.displayDraw));
router.post('/draw', catchErrors(drawController.createDraw));

router.get('/result/:id', catchErrors(drawController.choseParticipant));
router.post('/result/:id', catchErrors(drawController.showResult));

router.get('/result/:drawId/:participantId', catchErrors(drawController.displayResult))



module.exports = router;