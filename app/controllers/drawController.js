const Draw = require('../models/Draw');
const Participant = require('../models/Participant');
require('../models/index');


const drawController = {
    
     async getOne (id) {
        const result = await Draw.findByPk(id, {
            include : 'participants',
                    
        });
        return result;
    },

    async createDraw(req, res) {
       
        try {
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

            res.render('draw', { draw })
        } catch (error) {
            res.render('error', error);
        }
    },

    generateDraw(name, array) {
        // Pour chaque participant, je choisis le participant qui se situe à l'index suivant
        // Si le résultat est undefined, celà veut dire que le participant est le dernier élément du tableau
        // Dans ce cas je lui donne le premier élément du tableau
        const result = array[array.indexOf(name) + 1] ?? array[0];
        return result;
    },
    
    async choseParticipant(req, res, next) {
        
            const drawId = req.params.id;
            const draw = await Draw.findByPk(drawId, {
                include: 'participants'
            });
            if (!draw) {
                next();
            }
            
            res.render('result', { draw });
    },

    async showResult(req, res, next) {

        const participantId = req.body.participantId;
        const drawId = req.params.id;
        console.log(participantId)
        const participant = await Participant.findByPk(participantId);
        const draw = await Draw.findByPk(drawId, {
            include: 'participants',
        });

        console.log("participant");
        console.log(draw.participants);
        },

}



module.exports = drawController;