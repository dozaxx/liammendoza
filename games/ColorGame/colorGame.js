var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
// var modeButtons = document.querySelectorAll(".mode");

// for(var i = 0; i<modeButtons.length; i++){
//     modeButtons[i].addEventListener("click", function(){
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");

//         this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        
//         reset();
//     });
// }

// function reset(){
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     this.textContent = "New Colors";

//     messageDisplay.textContent = "";
//     for (var i = 0; i<squares.length; i++){
//         if (colors[i]){
//             squares[i]. styles.display = "block";
//             squares[i].style.background = colors[i];
//         } else {
//             sqares[i].style.display = "none";
//         }
        
//     }
//     h1.style.backgroundColor = "steelblue"
// }

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i<squares.length; i++ ){
        if (colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = " rgb(37, 37, 37)"
});


hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i<squares.length; i++ ){
       
            squares[i].style.background = colors[i];
        
            squares[i].style.display = "block";
        
    }
    h1.style.backgroundColor = " rgb(37, 37, 37)"
});


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    messageDisplay.textContent = "";
    for (var i = 0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = " rgb(37, 37, 37)"

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            resetButton.textContent = "Play Again?";
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            

        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColors(color) {
    for( var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num){
    var arr = [];
    for(var i =0; i<num; i++){
        arr.push(randomColor())
    }

    return arr;
}


function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}