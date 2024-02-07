const Draw = require('../models/Draw');

const Participant = require('../models/Participant');

require('../models/index');

const appController = {
    
    index (req, res) {
        res.render('index')
    },

    displayDraw(req, res) {
        res.render('draw')
    },

    async createDataFromForm(req, res) {
        
        const { budget } = req.body;
        const memberId = req.session.user.id;

        const newDraw = await Draw.create({
            budget: parseInt(budget, 10),
            member_id: parseInt(memberId, 10),
        });

        const participants = req.body.participantName;

        for (participant of participants) {
            await Participant.create({
                firstname: participant,
                draw_id: newDraw.id,
            });
        }

        const draw = await Draw.findByPk(newDraw.id, {
            include: 'participants'
        });
             
        res.render('result', { draw })
    },

    async showResult(req, res) {
        const drawId = req.params.id;
        const draw = await Draw.findByPk(drawId);
        
    }
};

module.exports = appController;
