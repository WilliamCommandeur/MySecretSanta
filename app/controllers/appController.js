const Draw = require('../models/Draw');


const appController = {
    
    async index (req, res) {
        res.render('index')
    },

    async displayDraw(req, res) {
        res.render('draw')
    },

    
};

module.exports = appController;
