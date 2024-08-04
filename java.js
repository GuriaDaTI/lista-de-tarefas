function addTask() {
    let taskInput = document.getElementById('new-task');
    let taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        let listItem = document.createElement('li');

        let taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
