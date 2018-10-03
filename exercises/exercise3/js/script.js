/******************************************************************************
Where's Sausage Dog?
by Pippin Barr

An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
var targetX;
var targetY;
var targetImage;
//noise movement
var tx;
var ty;


// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 100;

// Keep track of whether they've won
var gameOver = false;

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#ffff00");
  imageMode(CENTER);

  // Use a for loop to draw as many decoys as we need
  for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy
    var x = random(0,width);
    var y = random(0,height);
    // Generate a random number we can use for probability
    var r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough
    if (r < 0.1) {
      image(decoyImage1,x,y);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y);
    }
  }

//draw rectangle.
var rectangle = {
  x:0,
  y:0,
  w:150,
  h:150,
  color:color(38, 78, 142),
};

fill(rectangle.color);
noStroke();
rect(rectangle.x,rectangle.y,rectangle.w,rectangle.h);

//draw image of dog we are looking for in the corner.
var iconImage = {
  x:rectangle.w/2,
  y:rectangle.h/2,
};

image(targetImage, iconImage.x, iconImage.y-20, targetImage.width/1.5,targetImage.height/1.5);

//write the WANTED text
var wantedTxt ={
  x:iconImage.x,
  y:iconImage.y,
};
textAlign(CENTER);
textSize(32);
fill(175);
noStroke();

text("WANTED",wantedTxt.x,wantedTxt.y+40)

// Once we've displayed all decoys, we choose a location for the target
targetX = random(0,width);
targetY = random(0,height);

while(targetX<rectangle.w && targetY<rectangle.h){
  console.log("OVERLAP");
  targetX = random(0,width);
  targetY = random(0,height);
  }

  // And draw it (this means it will always be on top)
  image(targetImage,targetX,targetY);
//define tx, ty for noise value at (t)
  tx=random(0,windowWidth);
  ty=random(0,windowHeight);

}

function draw() {
  if (gameOver) {
    background(0);
    //move target when win!
    targetNoise();
    // Prepare our typography
    textFont("Helvetica");
    textSize(128);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));
    // Tell them they won!
    text("YOU LOSTN'T!",width/2,height/2);

  }
}


//Noise movement for target after win.
function targetNoise(){

  var targetWin={
    x: windowWidth*noise(tx),
    y: windowHeight*noise(ty),
    bgColor: noise(tx),
  };
image(targetImage,targetWin.x,targetWin.y);
noFill();
stroke(random(255));
strokeWeight(10);
ellipse(targetWin.x,targetWin.y,targetImage.width,targetImage.height);
tx+=0.1;
ty+=0.1;


}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
    }
  }
}
