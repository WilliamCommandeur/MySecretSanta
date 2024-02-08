const form = document.querySelector('form');

function generateDraw(name, array) {
    // Pour chaque participant, je choisis le participant qui se situe à l'index suivant pour ne pas que le participant tire son propre nom
    // Si le résultat est undefined, celà veut dire que le participant est le dernier élément du tableau
    // Dans ce cas je lui donne le premier élément du tableau
    const result = array[array.indexOf(name) + 1] ?? array[0];
    return result;
    }

// Je crée un tableau vide pour pouvoir stocker les noms des participants
let namesArray = [];
// Je récupère les éléments <option> pour récupérer les noms des participants
const options = document.querySelectorAll('option');
// J'ajoute chaque nom à mon tableau
options.forEach((option) => namesArray.push(option.textContent));
// Je mélange le tableau de noms
const shuffledArray = namesArray.sort(() => Math.random() - 0.5);

const select = document.querySelector('select');

function handleDrawForm() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const resultedName = generateDraw(select.value, shuffledArray);
        form.remove();
        const parent = document.querySelector('main div');
        createElementWithResult(resultedName, parent)
    } )
}

function createElementWithResult(name, parent) {
    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent = `Je dois offrir un cadeau à ${name}`;
    div.appendChild(paragraph);
    parent.appendChild(div);
}

handleDrawForm();


