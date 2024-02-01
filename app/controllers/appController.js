const Member = require('../models/Member');
const Draw = require('../models/Draw');
const sequelize = require('sequelize');
const Participant = require('../models/Participant');

const appController = {
    
    index (req, res) {
        res.render('index')
    },

    displayDraw(req, res) {
        res.render('draw')
    },

    validateParticipantTable(req, res) {
        
    },

    async showResult(req, res) {
        const { budget } = req.body;
        const memberId = req.session.user.id;

        const newDraw = await Draw.create({
            budget: parseInt(budget, 10),
            member_id: parseInt(memberId, 10),
        });

        const participants = req.body.participantName;
         participants.forEach(async (participant) => {
             const newParticipant = await Participant.create({
                 firstname: participant
             })
         });
         console.log(participants);
        
        // console.log(req.body)
        // console.log(req.body.participantName);

        res.redirect('/')
    }
};

module.exports = appController;
