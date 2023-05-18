const toDoForm = document.getElementById('toDoForm');
const titleOfToDo = document.getElementById('titleOfToDo');
const descOfToDo = document.getElementById('descOfToDo');
const toDoList = document.getElementById('toDoList');

//const toDoApp = document.querySelector('#toDoForm')
toDoForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const Title = titleOfToDo.value
    const Desription = descOfToDo.value
    handleToDoData(Title,Desription)
    titleOfToDo.value = ''
    descOfToDo.value = ''
    //handleToDoData()
})

// const addToDoList = (Title,Description) => {
//     const inputToDo = document.querySelector('#titleOfToDo')
//     const inputTitle =document.querySelector('#titleOfToDo')
//     const inputDesc = document.querySelector('#descOfToDo')


// }

function handleToDoData(Title,Description){
    const div = document.createElement('li')
    div.classList.add('list-group-item','d-flex', 'align-items-center')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('form-check-input', 'me-2')

    const t = document.createElement('h5')
    t.classList.add('mb-1')
    t.textContent=Title
    const d = document.createElement('p')
    d.classList.add('mb-1')
    d.textContent=Description

    
    t.innerHTML = `<strong>${(Title)}</strong>:<br>`
    d.innerHTML =`<strong>${(Description)}</strong>` 
    div.appendChild(checkbox)
    div.appendChild(t)
    div.appendChild(d)

    div.addEventListener('change',()=>{
        div.classList.toggle('completed')
})
    toDoList.appendChild(div)
}