let toDolist = function() {

    let Task = function(task) {
        if (!task) return;

        this.task = task;
    };

    let TaskApp = function() {
        this.data = [];

        this.add = function (task) {
            if (!task) return;

            let item = new Task(task);
            this.data.push(item);
        };

        this.edit = function (task, task2) {
            if (!task || !task2) return;

            let index;

            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].task == task) {
                    index = i;
                    break;
                };
            };

            this.data[index].task = task2;
        };

        this.remove = function (task) {
            let index;

            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].task == task) {
                    index = i;
                    break;
                };
            };

            this.data.splice(index, 1);
        };

    };

    let body = document.body;

    let  todolist = document.createElement('div');
    todolist.classList.add('todolist');

    let  todolistTitle = document.createElement('div');
    todolistTitle.classList.add('todolist__title');
    todolistTitle.innerHTML='ToDoList';

    let  todolistForm = document.createElement('div');
    todolistForm.classList.add('todolist__form');

    let  inputTodolist = document.createElement('input');
    inputTodolist.setAttribute('type', 'text');
    inputTodolist.setAttribute('name', 'task');
    inputTodolist.setAttribute('placeholder', 'Введите задачу ...');

    let btnForm = document.createElement('button');
    btnForm.classList.add('todolist__form_btn');

    let  todoList = document.createElement('ul');
    todoList.classList.add('todolist__list');

    todolistForm.append(inputTodolist, btnForm);
    todolist.append(todolistTitle,todolistForm, todoList);
    body.append(todolist);

    
    let app = new TaskApp();
    
    let updateList = function() {

        todoList.innerHTML = '';

        let data = app.data;

        for (let i = 0; i < data.length; i++) {

            let  todolistItem = document.createElement('li');
            todolistItem.classList.add('todolist__item');

            let  todolistCheck = document.createElement('div');
            todolistCheck.classList.add('todolist__item_check');

            let checkImg = document.createElement('img');
            checkImg.classList.add('todolist__item_check_mark');
            checkImg.src = '/images/check_mark.png';

            let  todolistTask = document.createElement('span');
            todolistTask.classList.add('todolist__item_task');
            todolistTask.innerHTML = data[i].task;

            let  btnTask = document.createElement('div');
            btnTask.classList.add('todolist__item_btns');

            let btnEdit = document.createElement('button');
            btnEdit.classList.add('todolist__item_btn', 'btn_edit');

            let btnDel = document.createElement('button');
            btnDel.classList.add('todolist__item_btn', 'btn_delete');
            
            todolistCheck.append(checkImg);
            btnTask.append(btnEdit, btnDel);
            todolistItem.append(todolistCheck, todolistTask, btnTask);
            todoList.append(todolistItem);

            btnEdit.addEventListener('click', function() {
                app.edit(todolistTask.innerHTML, prompt('Введите новую задачу'));
                updateList();
            });

            btnDel.addEventListener('click', function() {
                app.remove(todolistTask.innerHTML);
                updateList();
            });

            todolistCheck.addEventListener('click',function() {
                if (!checkImg.classList.contains('todolist__item_check_mark2')) {
                    checkImg.classList.add('todolist__item_check_mark2');
                    todolistTask.classList.add('todolist__item_task2');
                } else {
                    checkImg.classList.remove('todolist__item_check_mark2');
                    todolistTask.classList.remove('todolist__item_task2');
                };
                
            });
        };

        inputTodolist.value = '';
    };   
    
    btnForm.addEventListener('click', function() {
        let task = inputTodolist.value;
        app.add(task);
        updateList();               
    });   

    inputTodolist.addEventListener('keydown', function(event) {
        let key = event.code;
        if (key == 'Enter') {
            let task = inputTodolist.value;
            app.add(task);
            updateList();   
        };            
    });   

    
};

window.addEventListener('load', toDolist);