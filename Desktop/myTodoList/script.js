// My Todo List App - Milestone 1
// Mohammad Rashed Khan - s554089
// Mobile Application Development
// Date: 20.03.2026

// I hardcoded these three tasks as required
let todos = [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Buy bread", completed: false },
    { id: 3, text: "Buy eggs", completed: false }
];

const todoListElement = document.getElementById('todoList');
const addTodoBtn = document.getElementById('addTodoBtn');

// This function displays all the todos on the screen
function renderTodos() {
    if (!todoListElement) return;
    
    todoListElement.innerHTML = '';
    
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.checked = todo.completed;
        
        const todoText = document.createElement('span');
        todoText.className = 'todo-text';
        todoText.textContent = todo.text;
        
        // This makes the text turn blue
        todoText.style.color = '#007aff';
        
        // When checkbox is clicked, it crosses out the text
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                todoText.style.textDecoration = 'line-through';
                todoText.style.color = '#60a5fa';
                todo.completed = true;
            } else {
                todoText.style.textDecoration = 'none';
                todoText.style.color = '#007aff';
                todo.completed = false;
            }
        });
        
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoListElement.appendChild(todoItem);
    }
}

// This function adds a new todo when user clicks the button
function addNewTodo() {
    let newTodoText = prompt('Enter your new todo:');
    
    if (newTodoText && newTodoText.trim() !== '') {
        let newTodo = {
            id: Date.now(),
            text: newTodoText.trim(),
            completed: false
        };
        
        todos.push(newTodo);
        renderTodos();
    }
}

// Make the Add button work when clicked
if (addTodoBtn) {
    addTodoBtn.addEventListener('click', addNewTodo);
}

// Load the initial todos
renderTodos();

console.log('My Todo List App is running - Milestone 1 complete');
