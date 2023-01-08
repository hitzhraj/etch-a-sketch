const container = document.getElementById("container");
const defaultBoxes = 16;

let currentBoxes = defaultBoxes;

function setCurrentBoxes(newBoxes) {
  currentBoxes = newBoxes;
}

function reloadGrid() {
  clearGrid();
  makeDiv(currentBoxes);
}

function clearGrid() {
  container.innerHTML = "";
}

function changeGridSize(value) {
  setCurrentBoxes(value);
  updateSizeValue(value);
  reloadGrid();
}

function makeDiv(x) {
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
  for (let i = 0; i < x ** 2; i++) {
    let cell = document.createElement("div");
    // cell.style.color = "black";
    cell.className = "item";
    container.appendChild(cell);
  }
}

makeDiv(currentBoxes);

//COLOR MODE FUNCTION

const gridItems = document.querySelectorAll("div");
const colorMode = document.querySelector(".color-mode");
// console.log(gridItems);

colorMode.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
});

//ERASER FUNCTION
const eraser = document.querySelector(".eraser");
// console.log(eraser);

eraser.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white";
    });
  });
});

//CLEAR FUNCTION
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});

//SLIDER FUNCTION
const slider = document.getElementById("slider");
const sliderText = document.querySelector(".size-slider");

function updateSizeValue(value) {
  sliderText.innerHTML = `${value} x ${value}`;
}

slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => changeGridSize(e.target.value);
