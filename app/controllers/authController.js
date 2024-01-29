const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const { config } = require('../../config');
const Member = require('../models/Member');

const authController = {

    registerForm(req, res) {
        res.render('signup')
    },

    async register(req, res) {
        const { firstname, lastname, email, password, password_confirm } = req.body;
        
        if (!emailValidator.validate(email)) {
            res.render('signup', { error: 'Veuillez indiquer une adresse mail valide' });
            return;
        };

        const isRegistered = await Member.findOne({
            where: { email },       
        });

        if (isRegistered) {
            res.render('signup', { error: 'Cette adresse mail est déjà utilisée'});
            return;
        };

        if (password.length < config.password.length) {
            res.render('signup', { error: 'Le mot de passe indiqué est trop court'});
            return;
        };

        if (password !== password_confirm) {
            res.render('signup', { error: 'La confirmation du mot de passe a échouée'});
            return;
        };

        const salt = await bcrypt.genSalt(config.password.saltRound);
        const hash = await bcrypt.hash(password, salt);

        await Member.create({
            firstname,
            lastname,
            email,
            password: hash
        });

        res.redirect('/login');
    },

};

module.exports = authController;
