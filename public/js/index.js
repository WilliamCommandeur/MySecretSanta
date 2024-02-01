//* Participants *// 

function handleAddParticipantSubmit(event) {
    event.preventDefault();
    const div = document.getElementById('add-to-table') ;
    addParticipantToTable();
    const nameInput = document.querySelector('input[name="participant"');
    nameInput.value = "";   
}

function addParticipantToTable() {
    // Je récupère le nom du participant indiqué dans l'input
    const participantName = document.querySelector('input[name="participant"]').value;
    // Je crée une ligne, puis une cellule de tableau pour lui passer le nom
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    // J'ajoute à la cellule les classes Tailwind et le nom du participant
    cell.classList.add("flex", "justify-around", "text-dark", "border-b", "border-l", "border-[#E8E8E8]", "bg-[#F3F6FF]", "dark:bg-dark-3", "dark:border-dark", "dark:text-dark-7", "py-1", "px-1", "text-center", "text-base", "font-medium");
    cell.textContent = participantName;
    if (checkParticipantName(participantName)) {
        // Je dois créer un input type hidden avec le nom du participant
        // Pour pouvoir le récupérer dans mon req.body
        const inputHidden = document.createElement('input');
        inputHidden.setAttribute('type', 'hidden');
        inputHidden.setAttribute('name', 'participantName');
        inputHidden.value = participantName;
        const form = document.getElementById('draw-form');
        form.appendChild(inputHidden);
        // Je crée pour élément pour injecter l'icon fontawesome
        const icon = document.createElement('i');
        // Je lui passe la fonction qui lui ajoute l'écouteur d'évènement pour le gérer plus tard
        handleDeleteBtn(icon);
        const span = document.createElement('span');
        span.classList.add("icon");
        span.appendChild(icon);
        icon.classList.add("fa-solid", "fa-square-minus", "fa-xl", "cursor-pointer");
        icon.setAttribute('style', "color:#ef4444")
        cell.appendChild(span);
        // J'ajoute la cellule à la ligne, puis la ligne au tbody
        row.appendChild(cell);
        const tableBody = document.getElementById('t-body');
        tableBody.appendChild(row);
    } else {
        console.log("Veuillez indiquer un nom valide");
        return;
    }
}

function handleDeleteBtn(element) {
    element.addEventListener('click', deleteParticipant)
};

// Je vérifie la valeur de l'input
function checkParticipantName(participant) {
    if (isNaN(participant) && participant.length > 1) {
        return true;
    } else {
        return false;
    }
    
}

function deleteParticipant(event) {
    const cellToDelete = event.currentTarget.closest('td');
    const parent = cellToDelete.parentNode;
    parent.remove(cellToDelete);
}
// J'ajoute l'écouteur d'évènement au bouton de validation du formulaire
const addParticipantBtn = document.getElementById('add-participant');
addParticipantBtn.addEventListener('click', handleAddParticipantSubmit);


//* Budget *//

function handleAddBudgetSubmit(event) {
    event.preventDefault()
    const form = document.getElementById('add-budget');
    addBudgetToTable();
    const budgetInput = document.querySelector('input[name="budget"]');
    // budgetInput.value = ""
}

function addBudgetToTable() {
    const budget = document.querySelector('input[name="budget"]').value;
    const cell = document.getElementById('budget-cell');
    cell.textContent = '';
    cell.textContent += 'Budget : ' + budget + '€';
    
}

const addBudgetForm = document.getElementById('add-budget-button');
addBudgetForm.addEventListener('click', handleAddBudgetSubmit);