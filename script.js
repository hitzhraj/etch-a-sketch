const defaultSquares = 64;

let currentSquares = defaultSquares;

// Adding divs to main to create canvas

const container = document.getElementById("container");

function createCanvas(num) {
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  for (let i = 0; i < num ** 2; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
  }
}
createCanvas(currentSquares);

//Adding functionality to Color Mode button

const colorMode = document.querySelector(".color-mode");
const gridItems = document.querySelectorAll("div");
const colorWheel = document.getElementById("favcolor");

colorMode.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = colorWheel.value;
    });
  });
});

//Adding functionality to Eraser button
const eraser = document.querySelector(".eraser");

eraser.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "#ffffff";
    });
  });
});

//Adding functionality to Clear button
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.style.backgroundColor = "#ffffff";
  });
});

//Adding functionality to Random mode button
const randomColor = document.querySelector(".random-mode");

randomColor.addEventListener("click", () => {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    });
  });
});

//Adding functionality to slider bar

const slider = document.getElementById("slider");
const sliderText = document.getElementsByClassName("size-slider");

function updateSliderText(value) {
  sliderText[1].innerHTML = `${value} x ${value}`;
}

slider.onmousemove = (e) => updateSliderText(e.target.value);

slider.onchange = (e) => createCanvas(e.target.value);
