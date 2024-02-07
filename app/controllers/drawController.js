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
    
    async showResult(req, res, next) {
        
            const drawId = req.params.id;
            const draw = await Draw.findByPk(drawId, {
                include: 'participants'
            });
            if (!draw) {
                next();
            }
            
            // Je crée un tableau dans lequel j'ajoute le nom de chaque participant
            let participantsArray = [];
            for (participant of draw.participants) {
                participantsArray.push(participant.firstname)    
            }
            // Je mélange alétoirement le tableau de noms
            const shuffledArray = participantsArray.sort(() => Math.random() - 0.5);
            for (participant of draw.participants) {
                console.log(`${participant.firstname} : ${drawController.generateDraw(participant.firstname, shuffledArray)}`);
            }

            res.render('result', { draw })

            
    }

}

module.exports = drawController;