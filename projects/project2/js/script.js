// It's just Pong!
// by Carlos Giron-Bran
//

//audio aesthetics of the game, etc.


//and give the option to reset the game and play again

// Add a new class to the game that create a new kind of ball that the players should avoid when playing,
//this ball should look different, should move differently, and if the players hit it
//it should create some disadvantage for them (maybe it makes their paddle smaller,
//maybe it makes the paddle slower, maybe it makes the paddle move randomly,
//maybe it reverses the paddle controls, etc.), make sure you have at least one of these objects in the game

// Add a new class to the game that creates a new kind of object different from Paddles and Balls
//that interacts with the normal type of ball (maybe a kind of food the ball eats to get faster,
//maybe a portal that teleports the ball somewhere else on the screen, maybe a light-switch that changes
//the colors of the game to be lighter or darker, etc.),
//make sure you have at least one of these objects in the game.

// Use arrays to explore the dynamics of having many instances of objects in the game at the same time.
//(e.g. At minimum have either multiple balls, multiple paddles, or multiples of your new classes - potentially all of these!)





// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;
////// NEW //////
var state= "TITLE";

var prize;
var r;
var prizeRandom;

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(1000,480);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW,0);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87,0);

  prize=[
    "a poutine.",
    "a cup of coffee.",
    "2 dollars.",
    " a slice of pizza."
  ];

  r =floor(random(0,prize.length));
  prizeRandom = prize[r];

}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0,0,0,150);

////// NEW //////
switch (state) {

  case "TITLE":
  displayTitle();
  break;

  case "GAME":
  displayGame();
  break;

  case "GAME OVER":
  displayGameOver();
  break;
}
////// NEW END //////

}
////// NEW //////
function displayTitle(){

  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  noStroke();
  // Display the text
  text("It's just\nPONG!",width/2,height/2);
  // Font size goes down
  textSize(16);
  // Display the instructions
  text("Press SPACE to play\n player 1: use W and S \n player 2: use Up and Down arrows",width/2,3*height/4);

  // Check whether the spacebar was pressed to start the game...
  if (keyIsPressed && key === ' ') {
    // ... if it was, change the state to "GAME" so the switch statement in draw()
    // will display the game instead
    state = "GAME";
  }
}

function displayGame(){
  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {

// check which side the ball is off screen and gives points.
    if (ball.x + ball.size < 0) {
      leftPaddle.score++;
    }

    if (ball.x > width) {
      rightPaddle.score++;
    }
////// NEW END //////
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();

////// NEW //////
// scores displays when player makes it first point.
if (rightPaddle.score>=1) {
  rightPaddle.showScoreboardRight();
}

if (leftPaddle.score>=1) {
  leftPaddle.showScoreboardLeft();
  }
// checks for winning condition and stops game.
if (rightPaddle.score===2 || leftPaddle.score===2) {
  state= "GAME OVER";
  }


}

function displayGameOver(){
  background(127,0,0);

  if (rightPaddle.score>=1) {
    rightPaddle.showScoreboardRight();
  }

  if (leftPaddle.score>=1) {
    leftPaddle.showScoreboardLeft();
    }

  ball.display();
  leftPaddle.display();
  rightPaddle.display();

  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  noStroke();
/// I really don't know why they are inverted here
  if (rightPaddle.score===2) {
    text("Player 1 is\nsuperior!",width/2,0.5*height/2);
    push();
    textSize(16);
    text("Player 2 owes you"+" "+ prizeRandom,width/2,(0.5*height/2)+50);
    pop();


  }
  if (leftPaddle.score===2) {
    text("Player 2 is\nsuperior!",width/2,0.5*height/2);
    push();
    textSize(16);
    text("Player 1 owes you"+" "+ prizeRandom,width/2,(0.5*height/2)+50);
    pop();

  }
///////////////////////////////// I don't know what going on!!!!!
  if (keyIsPressed && key === ' ') {

    state = "TITLE";
  }



}

////// NEW END //////
