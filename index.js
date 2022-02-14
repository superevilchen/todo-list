const submitTask = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task");
const list = document.querySelector("#all-tasks");


submitTask.addEventListener("submit", (e) => {

    e.preventDefault();

    const data = input.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newTaskContent = document.createElement("div");
    newTaskContent.classList.add("contents");
    newTask.appendChild(newTaskContent);

    const newTaskText = document.createElement("input");
    newTaskText.classList.add("text");
    newTaskText.value = data;
    newTaskText.type = data;
    newTaskText.setAttribute("readonly", "readonly");
    newTaskContent.appendChild(newTaskText);

    // delete & edit 
    const actions = document.createElement("div");
    actions.classList.add("actions");

    const edit = document.createElement("button");
    edit.innerHTML = "Edit";
    const deletes = document.createElement("button");
    deletes.innerHTML = "Delete";
    actions.appendChild(edit);
    actions.appendChild(deletes);

    // update
    edit.addEventListener('click', () => {
        if (edit.innerHTML === "Edit") {
            edit.innerHTML = "Save";
            newTaskText.removeAttribute("readonly", "readonly");
            newTaskText.focus();
        } else {
            edit.innerHTML = "Edit";
            newTaskText.setAttribute("readonly", "readonly");
        }
    });

    // delete task
    deletes.addEventListener('click', () => {
        list.removeChild(newTask);
    })

    newTask.appendChild(actions);
    
    //
    list.appendChild(newTask);


    input.value = "";
});

(() => {
    const placeholders = 
    ['Add a new task... 📋', 
    'Stuff to do today! 💪', 
    'Groceries 🛒', 
    'What is on your mind?', 
    'Future activities... 🏄‍♀️', 
    'What to do when I\'m on vacation... 🏖️', 
    'Add a new goal to achieve! ⚽'];

    let placeholderPicker = Math.floor(Math.random() * (placeholders.length));

	let input = document.getElementById("new-task");
    input.placeholder = `${placeholders[placeholderPicker]}`;
})();


// add when clicking on input, it suggests certain tasks!
// local storage
// light/dark mode