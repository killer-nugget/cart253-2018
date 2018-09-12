// Exercise 1 - Moving pictures
// Pippin Barr
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


// The image of a clown face
var clownImage;

// The current position of the clown face
var clownImageX;
var clownImageY;
// the alien face
var alienFace;
//alien current position
var alienX;
var alienY;
//skull current position
var skullX;
var skullY;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;

// starting position circle position
var circleX = 0;
var circleY = 250;
var circleColor;

// preload()
//
// Load the two images we're using before the program starts

function preload() {
  clownImage = loadImage("assets/images/clown.png");
  alienFace = loadImage("assets/images/alien.png");
  skullFace = loadImage("assets/images/skull.png");
  feltTextureImage = loadImage("assets/images/black-felt-texture.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the clown image at the centre of the canvas
  clownImageX = width/2;
  clownImageY = height/2;

  //Start alien in center canvas
  alienX = width/2;
  alienY = height/2;
  //start skull in middle
  skullX = width/2;
  skullY = height/2
  // Start the felt image perfectly off screen above the canvas
  feltTextureImageX = width/2;
  feltTextureImageY = 0 - feltTextureImage.height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);


}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {

  // Move the felt image down by increasing its y position
  feltTextureImageY += 1;

  // Display the felt image
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);

  // calculate larger distance x,y for skull ---> 1/30th distance from mouse
var skullFaceX = mouseX - skullX;
var skullFaceY = mouseY - skullY;

skullX = skullX + skullFaceX/30;
skullY = skullY + skullFaceY/30;

  //display skull
  image(skullFace,skullX,skullY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;


  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;



  // Display the clown image
  image(clownImage,clownImageX,clownImageY);

  //display alien
  image(alienFace,alienX,alienY);

  //alien matches mouse position.
  alienX = mouseX;
  alienY = mouseY;



  // green-ish circle moving across the screen

  circleColor = color(143, 252, 70);
  fill(circleColor);
  circleX = circleX + 3;
  ellipse(circleX,circleY,150,150);



}
