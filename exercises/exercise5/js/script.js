// Basic OO Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;
var bgColor=0;


////// NEW //////
// preload sound effects
var beepSFX;
var mkFinish;
var mkLaugh;

function preload() {
  beepSFX = new Audio("assets/sounds/beep.wav");
  mkFinish = new Audio("assets/sounds/mk3-finish.mp3");
  mkLaugh = new Audio("assets/sounds/mk3-laugh.mp3");
}
////// END NEW //////

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(1250, 480);
  // Create a ball
  ball = new Ball(width / 2, height / 2, 5, 5, 10, 5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width - 10, height / 2, 10, 80, 15, DOWN_ARROW, UP_ARROW, 0);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0, height / 2, 10, 80, 15, 83, 87, 0);

////// NEW //////
  death = new Death();
////// END NEW //////

}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(bgColor,200);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {
    ////// NEW //////
    if (ball.x + ball.size < 0) {
      rightPaddle.upScore();
      //console.log('right:' + rightPaddle.score)
    }
    if (ball.x > width) {
      leftPaddle.upScore();
      //console.log('left:' + leftPaddle.score)
    }
    ////// NEW END //////
    ball.reset();

  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);


  ball.display();
  leftPaddle.display();
  rightPaddle.display();
/////// NEW //////
// display scores at 1/4 of screen and at 3/4. Left and Right score respectively
  textSize(32);
  text(leftPaddle.score,width/4,height/2);
  text(rightPaddle.score,(width/4)*3,height/2);
// checks for death.
  death.startCount();
  death.gameOverScreen()
////// END NEW //////
}
