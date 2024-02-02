const Draw = require('./app/models/Draw');
require('dotenv').config();

(async () => {
    try {
        const draw = await Draw.findByPk(1);
        console.log(draw);

    } catch (error) {
        console.log(error);
    }
})();