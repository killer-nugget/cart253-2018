// Matrix (prototype 1)
// this program will let you get into the matrix.
// Good thing you're a bit curious...

// by Carlos Giron-Bran

// array for letters
var letters = [];
var titles;
var webcam;
// setting the size of the letters
var letterSize = 32;
var lColor = 0;
//var sColor=0;
var myFont;
// state variable for switch
var state="MATRIX";

function preload(){
  myFont= loadFont('assets/font/LEDCalculator.ttf')
}

function setup() {
  frameRate(24);
  createCanvas(640,480);
  background(0);
  // for loop to create randomizing letters for the width of the canvas.
  for (var x = 0; x <= width; x += letterSize-2) {
    for (var y = random(-600, -700); y < random(0,-100); y += letterSize) {
      letters.push(new Letters(x, y, 0, 0, letterSize));
    }
    titles = new Titles (width/2,height/2,640,480,32,0);
    webcam = new Webcam (width/2,height/2,640,480);
  }
}

function draw() {
  background(0, 0, 0, 200);

//switch to toggle between the matrix and the steps to get out of it.
    switch (state) {

      case 'MATRIX':
        matrix();
        break;

      case 'MATRIX FIRST':
        titles.firstScreen();
        break;

      case 'MATRIX SECOND':
        webcam.display();

        break;
    }
}
// for loop access every object in letters array and randomize, display
//and move downwards.
function matrix() {
  for (var i = 0; i < letters.length; i++) {
    letters[i].randomize();
    letters[i].display();
    letters[i].down();
  }
    // displays matrixOut if anykey is pressed.
    if (keyIsPressed === true) {
      state = 'MATRIX FIRST';
    }
}
