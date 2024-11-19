document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskType = document.getElementById('task-type').value;
    const priority = document.getElementById('priority').value;
    const timeDuration = document.getElementById('time-duration').value;
    const taskList = document.getElementById('tasks');
    
    if (taskInput.value) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const taskDetails = document.createElement('span');
        taskDetails.classList.add('task-details');
        taskDetails.textContent = ` | Type: ${taskType}, Priority: ${priority}, Duration: ${timeDuration} mins`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(taskDetails);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        document.getElementById('time-duration').value = '';
    }
});
