// generateDraw(name, array) {
//     // Pour chaque participant, je choisis le participant qui se situe à l'index suivant
//     // Si le résultat est undefined, celà veut dire que le participant est le dernier élément du tableau
//     // Dans ce cas je lui donne le premier élément du tableau
//     const result = array[array.indexOf(name) + 1] ?? array[0];
//     return result;
// }
let namesArray = [];
const participantsName = document.querySelectorAll('input[type="hidden"]');
for(element of participantsName) {
    namesArray.push(element.value);
}

console.log(namesArray);


