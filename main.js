import './style.css'

const button = document.getElementById("enter_button")


button.addEventListener("click", (event) => {
    toDo_num.innerText = toDo_list.lenght
});