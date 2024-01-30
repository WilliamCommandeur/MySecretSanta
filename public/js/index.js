//* Participants *// 

function handleAddParticipantSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('add-to-table') ;
    addParticipantToTable();
    form.reset();   
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
}

function handleDeleteBtn(element) {
    element.addEventListener('click', deleteParticipant)
};

function deleteParticipant(event) {
    const cellToDelete = event.currentTarget.closest('td');
    const parent = cellToDelete.parentNode;
    parent.remove(cellToDelete);
}
// J'ajoute l'écouteur d'évènement au bouton de validation du formulaire
const addParticipantForm = document.getElementById('add-to-table');
addParticipantForm.addEventListener('submit', handleAddParticipantSubmit);

//* Budget *//

function handleAddBudgetSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('add-budget');
    addBudgetToTable();
    form.reset();
}

function addBudgetToTable() {
    const budget = document.querySelector('input[name="budget"]').value;
    const cell = document.getElementById('budget-cell');
    cell.textContent += budget + '€';
    
}

const addBudgetForm = document.getElementById('add-budget');
addBudgetForm.addEventListener('submit', handleAddBudgetSubmit);