const todoForm = document.querySelector(".form-todo");
const text = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
const textField = document.querySelector("#textField")
const selectionToDo = document.querySelector(".section-todo")
const filter = document.querySelector("#filter-task")
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(text.value === ""){
        alert("Please Add Some Task")
    }else{
        const newTodoText = text.value;
    
        const newLi = document.createElement("li")
        
        const newLiText = `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
          <button class="todo-btn done">Done</button>
          <button class="todo-btn remove">Remove</button>
        </div>`
        newLi.innerHTML = newLiText
            todoList.append(newLi)
    }
    
    text.value = "" 
    filter.addEventListener("keyup",filterTask)
function filterTask(e){
    const text = e.target.value.toLowerCase()
    document.querySelectorAll("li").forEach(
        function(task){
            const item = task.firstChild.textContent
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block'
            }else{
                task.style.display = "none"
            }
        }
    )
} 
})
const btn = document.createElement("button")
    btn.textContent = "Delete All"
    btn.classList.add("delete-btn");
    console.log(btn)
    selectionToDo.append(btn)
btn.addEventListener("click", ()=>{
    todoList.innerHTML = ""
})


todoList.addEventListener("click", (e) =>{
    if(e.target.classList.contains("remove")){
        const liSpan = e.target.parentNode.parentNode;
        liSpan.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
    }
})