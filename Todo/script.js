document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Veuillez entrer une tâche !");
        return;
    }

    const taskList = document.getElementById('task-list');

    // Création de l'élément de tâche
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    // Bouton de suppression
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
