const Draw = require('../models/Draw');

const drawController = {
    
     async getOne (id) {
        const result = await Draw.findByPk(id, {
            include : 'participants',
                    
        });
        return result;
    },

}

module.exports = drawController;