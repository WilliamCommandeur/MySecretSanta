const Draw = require('./app/models/Draw');
require ('./app/models/index');




async function draw(name) {
    const draw = await Draw.findByPk(5);
    const participants = draw.participant.name;
    console.log(participants);
// Je mélange aléatoirement les éléments du tableau
    const shuffledParticipants = participants.sort(() => Math.random() - 0.5);
    // Pour chaque participant, je choisis le participant qui se situe à l'index suivant
    // Si le résultat est undefined, celà veut dire que le participant est le dernier élément du tableau
    // Dans ce cas je lui donne le premier élément du tableau
    const resultOfDraw = shuffledParticipants[shuffledParticipants.indexOf(name) + 1] ?? shuffledParticipants[0];
    return resultOfDraw;
}

for (participant of participants) {
    draw(participant);
}