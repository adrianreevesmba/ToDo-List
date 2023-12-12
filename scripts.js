const task = document.getElementById("task");
const newTask = document.getElementById("newTask");

function addTask(){
    let li = document.createElement("li");
    li.innerHTML = task.value;
    newTask.appendChild(li); 
    task.value =" ";
}

newTask.addEventListener("click",(event)=> {
        event.preventDefault();
        if (li = "click") {
            event.target.classList.add(".strike");
            event.target.parentElement.removeChild(event.target)
        }
    });



















//  const form = document.querySelector('form');
//  const input = document.querySelector('#task');
// const taskList = document.querySelector('#newTask');

// function addToDo( ) {
//     const value = input.innerHTML;
//     const newItem = document.createElement('li');
//     taskList.innerHTML = input.value;
//     taskList.appendChild(li);
     
// }

// form.addEventListener('submit', (event)=> {
//     event.preventDefault();
//     const input = document.querySelector('#task');
//     const toDo = input.value;
//     addToDo(toDo);
//     input.value = ''
// })





// const input = document.querySelector("input");
// const list = document.querySelector(".list");

// form.addEventListener("click", () e => {
//     e.preventDefault()
//     const value = input.value
//     const elem = document.createElement("li")
//     elem.textContent = value
//     elem.addEventListener("click", () => {
//         if (elem.style.textDecoration === "line-through") {
//             elem.style.textDecoration = "none"
//         } else { 
//             elem.style.textDecoration = "line-through"
//         }
//     })
//     list.append(elem)
//     input.value = ""
// })
