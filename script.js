
// Select elements
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const globalDateInput = document.getElementById('global-date-input');

// Set today's date as default
window.addEventListener('load', () => {
    const today = new Date().toISOString().split('T')[0];
    globalDateInput.value = today;
});

// Add event listener to the form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task list item
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskLabel = document.createElement('strong');
    taskLabel.textContent = task;

    // Add strike-through functionality
    taskDiv.addEventListener('click', function () {
        taskDiv.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-dark btn-sm';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    taskDiv.appendChild(taskLabel);
    listItem.appendChild(taskDiv);
    listItem.appendChild(deleteButton);

    // Add to task list
    taskList.appendChild(listItem);

    // Clear task input
    taskInput.value = '';
});
