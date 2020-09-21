var mode = 6;
var colors = generateRandomColors(mode);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");

//buttons
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");

document.querySelector("#colorDisplay").textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  if (colors[i]) {
    squares[i].style.background = colors[i];
  } else {
    squares[i].style.display = "none";
  }
}

function generateNewSquares(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        displayMessage.textContent = "Correct!";
        console.log(this.style.backgroundColor);
        changeColors(pickedColor);
      } else {
        console.log(this.style.backgroundColor);
        this.style.backgroundColor = "#232323";
        displayMessage.textContent = "Try Again";
      }
    });
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function generateRandomColors(num) {
  //make array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    //get rnadom color push into array
  }

  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  //dom adds spacing automatically
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//   function reset() {
resetButton.addEventListener("click", function () {
  colors = generateRandomColors(mode);
  //   pickedColor = colors[Math.floor(Math.random() * mode)];
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  generateNewSquares(pickedColor);
  document.querySelector("h1").style.backgroundColor = "#232323";
  displayMessage.textContent = "";
  console.log(colors);
});
//   }

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

generateNewSquares(pickedColor);

easy.addEventListener("click", function () {
  h1.style.backgroundColor = "#232323";
  mode = 3;
  medium.classList.remove("selected");
  hard.classList.remove("selected");
  easy.classList.add("selected");
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

medium.addEventListener("click", function () {
  h1.style.backgroundColor = "#232323";
  mode = 6;
  easy.classList.remove("selected");
  hard.classList.remove("selected");
  medium.classList.add("selected");
  colors = generateRandomColors(mode);

  pickedColor = pickColor();
  console.log(colors);
  console.log(pickedColor);
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    //   console.log(squares[i]);
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hard.addEventListener("click", function () {
  h1.style.backgroundColor = "#232323";
  mode = 9;
  easy.classList.remove("selected");
  medium.classList.remove("selected");
  hard.classList.add("selected");
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].style.display = "block";
  }
});
