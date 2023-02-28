
function openCalc(){
    const show = document.querySelector(".calc-modal");
    const movedown = document.querySelector(".app-container");
    show.classList.add("show");
    show.classList.remove("remove");
    movedown.classList.add("movedown");
    movedown.classList.remove("moveup");
    console.log("calc opened!");
}

function closeCalc(){
    const remove = document.querySelector(".calc-modal");
    const moveup = document.querySelector(".app-container");
    remove.classList.remove("show");
    remove.classList.add("remove");
    moveup.classList.remove("movedown");
    moveup.classList.add("moveup");
    console.log("calc closed!");
}


function openWeather(){

    console.log("weather opened!");
}

function openTodo(){

    console.log("todo opened!");
}