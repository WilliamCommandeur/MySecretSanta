const Member = require('../models/Member');
const Draw = require('../models/Draw');
const sequelize = require('sequelize');
const Participant = require('../models/Participant');
const drawController = require('../controllers/drawController');
require('../models/index');

const appController = {
    
    index (req, res) {
        res.render('index')
    },

    displayDraw(req, res) {
        res.render('draw')
    },

    validateParticipantTable(req, res) {
        
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
    }
};

module.exports = appController;
