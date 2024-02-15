const bcrypt = require('bcrypt');
const Member = require('../models/Member');
const emailValidator = require('email-validator');
const { config } = require('../../config');

const sessionController = {
    
    async loginForm(req, res) {
        res.render('login');
    },

    async login(req, res) {
        const { email, password } = req.body;

        if (!emailValidator.validate(email) || password.length < config.password.length) {
            res.render('login', { error: 'Veuillez vérifier l\'email ou le mot de passe'});
            return;
        };

        const user = await Member.findOne({
            where: { email: email },
        });

        if (!user) {
            res.render('login', { error: 'Veuillez vérifier l\'email ou le mot de passe'});
            return;
        };

        const isSamePassword = await bcrypt.compare(password, user.password);

        if (!isSamePassword) {
            res.render('login', { error: 'Veuillez vérifier l\'email ou le mot de passe'});
            return;
        };

        delete user.dataValues.password;

        req.session.user = user;

        res.redirect('/');
    },

    async destroy(req, res) {
        req.session.user = false;
        
        req.session.destroy();
        
        res.redirect('/');
    },




};

module.exports = sessionController;