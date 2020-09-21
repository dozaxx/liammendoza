var start = new Date().getTime();

function makeShapeAppear() {

    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();              

}

function getRandomColor() {

    var letters = '0123456789ABCDEF'.split('');
    var color = '#';

    for (var i = 0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
    
}

function appearAfterDelay () {
    setTimeout(makeShapeAppear, Math.random() * 2000);
    var top = Math.random() * 300;
    var left = Math.random() * 500;
    var width = (Math.random() * 200) + 100;

    if (Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = "50%";

    } else {

        document.getElementById("shape").style.borderRadius = "0";

    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    var start = new Date().getTime();

}

appearAfterDelay();

document.getElementById("shape").onclick = function(){

    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = end - start;
    timeTaken = timeTaken / 1000;
    document.getElementById("time").innerHTML = timeTaken + "s";

    appearAfterDelay();
}