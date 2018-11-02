// Pong
// by Carlos Giron-Bran
//

// Improve the game in the usual ways we have seen in previous exercises
// by adding scores, displaying the score, changing the visual and audio aesthetics of the game, etc.

// Add a title to the game that displays before the game starts,
//let the player start the game by clicking the mouse or hitting a key

// Add an ending to the game when one player reaches 11 points (or some other number you choose),
// display a game over screen and give the option to reset the game and play again

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

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW,0);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87,0);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {
////// NEW //////
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
  showScoreboardRight();
}

if (leftPaddle.score>=1) {
  showScoreboardLeft();
}

}

function showScoreboardRight () {
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(rightPaddle.score,width/4, height/2);

}

function showScoreboardLeft () {
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(leftPaddle.score,(width/4)*3, height/2);
}
////// NEW END //////
