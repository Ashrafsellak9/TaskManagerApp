document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDesc = document.getElementById('task-desc');
    const taskList = document.getElementById('task-list');
    const noTask = document.getElementById('no-task');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = taskInput.value.trim();
        const description = taskDesc.value.trim();

        if (title && description) {
            addTask(title, description);
            taskInput.value = '';
            taskDesc.value = '';
            noTask.classList.add('d-none');
        }
    });

    function addTask(title, description) {
        const li = document.createElement('li');
        li.className = 'list-group-item';

        const taskContent = document.createElement('div');
        taskContent.innerHTML = `<strong>${title}</strong><p class="mb-0">${description}</p>`;

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeButton = document.createElement('button');
        completeButton.className = 'btn btn-success btn-sm';
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
            if (taskList.children.length === 1) {
                noTask.classList.remove('d-none');
            }
        });

        taskActions.appendChild(completeButton);
        taskActions.appendChild(deleteButton);
        li.appendChild(taskContent);
        li.appendChild(taskActions);
        taskList.appendChild(li);
    }
});