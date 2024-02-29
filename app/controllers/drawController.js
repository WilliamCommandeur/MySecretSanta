const Draw = require("../models/Draw");
const Participant = require("../models/Participant");
require("../models/index");

const drawController = {
  async getOne(id) {
    const result = await Draw.findByPk(id, {
      include: "participants",
    });
    return result;
  },

  async createDraw(req, res) {
    try {
      const { budget } = req.body;
      const memberId = req.session.user.id;
      // J'ajoute le draw en BDD avec les infos du user et du form (pour le budget)
      const newDraw = await Draw.create({
        budget: parseInt(budget, 10),
        member_id: parseInt(memberId, 10),
      });

      // Pour le tirage au sort, je récupère le tableau de noms des participants
      let participants = req.body.participantName;
      // Je le mélange aléatoirement
      participants = participants.sort(() => Math.random() - 0.5);
      for (participant of participants) {
        // Pour chaque participant, je lui attribue le nom qui le suit dans le tableau mélangé
        // Si le résultat est undefined, le participant est le dernier élément du tableau, donc je lui attribue le premier élément
        let result =
          participants[participants.indexOf(participant) + 1] ??
          participants[0];
        // J'ajoute chaque participant en BDD, avec son résultat du tirage
        await Participant.create({
          firstname: participant,
          result_name: result,
          draw_id: newDraw.id,
        });
      }

      const draw = await Draw.findByPk(newDraw.id, {
        include: "participants",
      });

      res.render("draw", { draw });
    } catch (error) {
      res.render("error", error);
    }
  },

  async choseParticipant(req, res, next) {
    const drawId = req.params.id;
    const draw = await Draw.findByPk(drawId, {
      include: "participants",
    });
    if (!draw) {
      next();
    }

    res.render("choseParticipant", { draw });
  },

  async showResult(req, res, next) {
    // Je récupère l'id du participant sélectionné grâce au form
    const participantId = req.body.participantId;
    // Je récupère l'id du draw grâce à l'URL
    const drawId = req.params.id;
		console.log(participantId);
		console.log(req.body);
    const participant = await Participant.findByPk(participantId);
		console.log(participant);

    const draw = await Draw.findByPk(drawId, {
      include: "participants",
    });

    res.redirect(`/result/${drawId}/${participantId}`);
  },

  async displayResult(req, res) {
		const participantId = req.params.participantId;
		
		const participant = await Participant.findByPk(participantId);
		console.log(participant);
		res.render('showResult', { participant })
	},
};

module.exports = drawController;
