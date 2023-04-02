function openCalc() {
  const show = document.querySelector(".calc-modal");
  const movedown = document.querySelector(".app-container");
  show.classList.add("show");
  show.classList.remove("remove");
  movedown.classList.add("movedown");
  movedown.classList.remove("moveup");
}

function closeCalc() {
  const remove = document.querySelector(".calc-modal");
  const moveup = document.querySelector(".app-container");
  remove.classList.remove("show");
  remove.classList.add("remove");
  moveup.classList.remove("movedown");
  moveup.classList.add("moveup");
}

function openWeather() {
  const show = document.querySelector(".weather-modal");
  const movedown = document.querySelector(".app-container");
  show.classList.add("show-weather");
  show.classList.remove("remove-weather");
  movedown.classList.add("movedown");
  movedown.classList.remove("moveup");
}

function closeWeather() {
  const remove = document.querySelector(".weather-modal");
  const moveup = document.querySelector(".app-container");
  remove.classList.remove("show-weather");
  remove.classList.add("remove-weather");
  moveup.classList.remove("movedown");
  moveup.classList.add("moveup");
}

function openTodo() {
  console.log("todo opened!");
}
