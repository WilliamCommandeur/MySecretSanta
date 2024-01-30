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
    // J'ajoute à la cellule les classes Tailwind
    cell.classList.add("text-dark", "border-b", "border-l", "border-[#E8E8E8]", "bg-[#F3F6FF]", "dark:bg-dark-3", "dark:border-dark", "dark:text-dark-7", "py-5", "px-2", "text-center", "text-base", "font-medium");
    cell.textContent = participantName;
    // J'ajoute la cellule à la ligne, puis la ligne au tbody
    row.appendChild(cell);
    const tableBody = document.getElementById('t-body');
    tableBody.appendChild(row);
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