const Draw = require('../models/Draw');


const appController = {
    
    index (req, res) {
        res.render('index')
    },

    displayDraw(req, res) {
        res.render('draw')
    },

    
};

module.exports = appController;
