const addParticipantForm = document.getElementById('add-to-table');

function handleAddParticipantSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('add-to-table') ;
    addParticipantToTable();
    form.reset();   
}

addParticipantForm.addEventListener('submit', handleAddParticipantSubmit);

function addParticipantToTable() {
    const participantName = document.querySelector('input[name="participant"]').value;
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.classList.add("text-dark", "border-b", "border-l", "border-[#E8E8E8]", "bg-[#F3F6FF]", "dark:bg-dark-3", "dark:border-dark", "dark:text-dark-7", "py-5", "px-2", "text-center", "text-base", "font-medium");
    const tableBody = document.getElementById('t-body');
    cell.textContent = participantName;
    row.appendChild(cell);
    tableBody.appendChild(row);
}

function handleAddBudgetSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('add-budget');
    addBudgetToTable();
    form.reset();
}

const addBudgetForm = document.getElementById('add-budget');
addBudgetForm.addEventListener('submit', handleAddBudgetSubmit);

function addBudgetToTable() {
    const budget = document.querySelector('input[name="budget"]').value;
    const cell = document.getElementById('budget-cell');
    cell.textContent += budget + '€';

}