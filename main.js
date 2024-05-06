import './style.css'

const button = document.getElementById("button_input_enter")
const input_field = document.getElementById("input_toDO")
const toDo_Container = document.getElementById("div_container_toDo_list")

let toDo_list = []

const toDoElement = {
    text: "",
    isDone: false,

}



function create_ToDo_Elememt_Constructor (todo) {  
    let div_ToDo_Component = document.createElement("div")
    div_ToDo_Component.className ="div_toDo_component"
    toDo_Container.appendChild(div_ToDo_Component)

    let p = document.createElement("p")
    p.className ="text_toDo"
    p.innerText = todo.text
    div_ToDo_Component.appendChild(p)

    let checkButton = document.createElement("button")
    checkButton.className = "check_toDo"
    div_ToDo_Component.appendChild(checkButton)

    let icon_check = document.createElement("span")
    icon_check.innerText = "Check"
    icon_check.className = "material-symbols-outlined"
    checkButton.appendChild(icon_check)

    let button_delate_toDo = document.createElement("button")
    button_delate_toDo.className = "button_delate_toDo"
    div_ToDo_Component.appendChild(button_delate_toDo)
    
    let icon_trash = document.createElement("i")
    icon_trash.className = "gg-trash"
    button_delate_toDo.appendChild(icon_trash)

    return {
        div_container_element: div_ToDo_Component,
        paragraf: p,
        button_check: checkButton,
        button_delate: button_delate_toDo,
        delate_object: this.button_delate.addEventListener("click",(event)=>{
            toDo_Container.removeChild(this.div_container_element)
        })
    }
}

button.addEventListener("click",(event)=>{
    if (toDo_list.length != 0){
        for (var element of toDo_list){
            if (element.text == input_field.value){    
                break
            }
            else{
                let toDo_Object = toDoElement;
                toDo_Object.text = input_field.value
                toDo_Object.isDone = false
                toDo_list(create_ToDo_Elememt_Constructor(toDo_Object))
            }
        }
    }
    else{
        console.log("canee")
        let toDo_Object = toDoElement;
        toDo_Object.text = input_field.value
        toDo_Object.isDone = false
        toDo_list.push(toDo_Object)
        toDo_list(create_ToDo_Elememt_Constructor(toDo_Object))
    }
    input_field.value =""
});
     
