import './style.css'

const button = document.getElementById("button_input_enter")
const input_filed = document.getElementById("input_toDO")
const toDo_Container = document.getElementById("div_container_toDo_list")
let toDo_list = []



//----------------------------------- FUNCTIO ------------------------------------------

// FORMATTING THE STYLE OF THE TODO IN HTML
const formatting_Html_ToDO = (toDo_obj) => {
    toDo_obj.button_check.isDone = !toDo_obj.button_check.isDone
        if(toDo_obj.button_check.isDone){
            toDo_obj.div_container_element.html.style.backgroundColor =' rgba(143, 20, 20, 0.808)';
            toDo_obj.paragraf.html.style.textDecoration ='line-through';
            toDo_obj.icon_check.html.style.color ='#1a8111'
        }
        else{
            toDo_obj.div_container_element.html.style.backgroundColor = '#3332325b';
            toDo_obj.paragraf.html.style.textDecoration ='none';
            toDo_obj.icon_check.html.style.color ='#9c9c9c'
            }
}

// CREATING THE TODO ELMENT HTML
const  Create_html_Todo_Element= (todo) =>{  

    let object_Todo = {
        div_container_element: {
            html:     document.createElement("div"),
            },
        paragraf:     {
            html:     document.createElement("p"),
            text:     todo
            },
        button_check: {
            html:     document.createElement("button"),
            isDone:    false
            },
        icon_check:   {
            html:     document.createElement("span"),
            },
        button_delate: {
            html:      document.createElement("button"),
            },
        icon_trash:{    
            html:      document.createElement("i"),
            }
    }
    
    // DIV_CONTAINER
    object_Todo.div_container_element.html.className ="div_toDo_component"
    toDo_Container.appendChild(object_Todo.div_container_element.html)

    // PARAGRAF
    object_Todo.paragraf.html.className = "text_toDo"
    object_Todo.paragraf.html.innerText = object_Todo.paragraf.text
    object_Todo.div_container_element.html.appendChild(object_Todo.paragraf.html)

    // BUTTON_CHECK
    object_Todo.button_check.html.className = "check_toDo"
    object_Todo.div_container_element.html.appendChild(object_Todo.button_check.html)

    // ICON_CHECK
    object_Todo.icon_check.html.className = "material-symbols-outlined"
    object_Todo.icon_check.html.innerText = "Check"
    object_Todo.button_check.html.appendChild(object_Todo.icon_check.html)

    // BUTTON_DELATE
    object_Todo.button_delate.html.className = "button_delate_toDo"
    object_Todo.div_container_element.html.appendChild(object_Todo.button_delate.html)   

    // ICON_TRASH
    object_Todo.icon_trash.html.className = "gg-trash"
    object_Todo.button_delate.html.appendChild(object_Todo.icon_trash.html)


    // EVENT ON CLICK BUTTON CHECK TODOLIST
    object_Todo.button_check.html.addEventListener("click", (event) =>{
        formatting_Html_ToDO(object_Todo)
    })

    // EVENT ON CLICK BUTTON DELATE TODOLIST
    object_Todo.button_delate.html.addEventListener("click", () =>{
        toDo_Container.removeChild(object_Todo.div_container_element.html)
        toDo_list.pop(object_Todo)
    })

    return object_Todo
}


//-----------------------------------------------------------------------------------------------------


// EVENT ON CLICK INPUT ENTER BUTTON
button.addEventListener("click",(event)=>{
    // IS THE INPUT FILLED?
    if( input_filed.value != "" ){
        //IS THE LIST FILLED
        if ( toDo_list.length != 0){
            // THEN SCROLL THE LIST
            for ( const object of toDo_list){
                // IF THERE'S ALREADY ANOTHER ITEMS WITH THE SAME TEXT EXIT
                if( object.paragraf.text == input_filed.value){
                    input_filed.value = ""
                    return null
                }
            }
            // IF THERE ISN'T ANY ITEMS WITH THE SAME TEXT VAUE
            // CREATE A NEW ONE AND PUSHI IT INTO THE LIST
            var newObject_Todo = Create_html_Todo_Element(input_filed.value)
            toDo_list.push(newObject_Todo)   

        }
        // IS THELIST EMPTY
        // CREATE A NEW ONE AND PUSHI IT INTO THE LIST
        else{
            var newObject_Todo = Create_html_Todo_Element(input_filed.value)
            toDo_list.push(newObject_Todo) 
        }
    }else{
        input_filed.value = ""
    }
    input_filed.value = ""
});
     
