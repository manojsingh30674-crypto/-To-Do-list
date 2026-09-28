// Selecting DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a valid task!");
        return;
    }

    // Create the main li container
    const li = document.createElement('li');

    // Create text span element
    const textSpan = document.createElement('span');
    textSpan.classList.add('task-text');
    textSpan.innerText = taskText;
    li.appendChild(textSpan);

    // Create action buttons wrapper
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    // Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = '✓';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = '✕';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    // Append buttons and add the item to the list
    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);
    li.appendChild(actionsDiv);
    todoList.appendChild(li);

    // Clear input field for the next entry
    todoInput.value = "";
}

// Event listener for button click
addBtn.addEventListener('click', addTask);

// Event listener to allow pressing "Enter" key to add items
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
  
