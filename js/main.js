// Variables
let input, form, list, btnAdd;

//create an array
let items = [];

let startTime, timerInterval;

let total;

//create function
const createItem = (text) => {
  if (!startTime) {
    startTime = Date.now();

    timerInterval = setInterval(() => {
      let timerShow = document.querySelector(".timer");

      const currentTime = Date.now();

      const elapsedMilliseconds = (currentTime - startTime) / 1000;

      const seconds = Math.floor(elapsedMilliseconds) % 60; // Getting seconds
      const minutes = Math.floor(elapsedMilliseconds / 60) % 60; // Getting minutes
      const hour = Math.floor(elapsedMilliseconds / 60 / 60) % 60; // Getting hours

      let strTimer = `${(hour < 10 ? "0" : "") + hour}:${
        (minutes < 10 ? "0" : "") + minutes
      }:${(seconds < 10 ? "0" : "") + seconds}`;
      timerShow.innerHTML = strTimer;
    }, 500);
  }

  if (typeof [][text] === "function") {
    items.push({
      text: text,
    });
    renderList();
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 750);
  }

  if (items.length === total) {
    clearInterval(timerInterval);
  }
};

// Render List function

const renderList = () => {
  list.textContent = "";

  items.forEach((item) => {
    const span = document.createElement("span");
    span.className = "result";
    span.textContent = item.text;
    list.appendChild(span);
  });

  //Adding a count

  const score = items.length;

  document.querySelector(".count .score").textContent = score;
};

//Add to list
const addToList = () => {
  if (input.value === "") return;
  createItem(input.value);
  input.value = "";
};

window.addEventListener("DOMContentLoaded", () => {
  input = document.querySelector(".form-control");
  form = document.querySelector(".form__wrapper");
  list = document.querySelector(".results");
  btnAdd = document.querySelector(".btn btn-outline-secondary");
  headerWrapper = document.querySelector(".header__wrapper");

  console.log(list);

  //Adding a count

  total = Object.getOwnPropertyNames(Array.prototype).filter(
    (item) => typeof [][item] === "function"
  ).length;
  document.querySelector(".count .total").textContent = total;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToList();
  });
});
