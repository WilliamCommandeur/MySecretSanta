const participants = ['William', 'Albert', 'Jean', 'Marie', 'Anne'];
// Je mélange aléatoirement les éléments du tableau
const shuffledParticipants = participants.sort(() => Math.random() - 0.5);

function draw(name) {
    // Pour chaque participant, je choisis le participant qui se situe à l'index suivant
    // Si le résultat est undefined, celà veut dire que le participant est le dernier élément du tableau
    // Dans ce cas je lui donne le premier élément du tableau
    const resultOfDraw = shuffledParticipants[shuffledParticipants.indexOf(name) + 1] ?? shuffledParticipants[0];
    return resultOfDraw;
}

for (participant of participants) {
    draw(participant);
}