// Variables
let input, form, list;

//create an array
let items = [];

//create function
const createItem = (text) => {
  if (typeof [][text] === "function") {
    items.push({
      text: text,
    });
    renderList();
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
  headerWrapper = document.querySelector(".header__wrapper");

  console.log(list);

  //Adding a count

  const total = Object.getOwnPropertyNames(Array.prototype).filter(
    (item) => typeof [][item] === "function"
  ).length;
  document.querySelector(".count .total").textContent = total;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToList();
  });
});
