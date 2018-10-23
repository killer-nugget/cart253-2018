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
// var gameOverScreenActivated=false;
// var gameOver=false;

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
  createCanvas(640, 480);
  // Create a ball
  ball = new Ball(width / 2, height / 2, 5, 5, 10, 5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, 0);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, 0);
  
  death = new Death();

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

  death.startCount();
  death.gameOverScreen()
////// END NEW //////

}

// function startCount () {
//   if (leftPaddle.score === 10 || rightPaddle.score === 10) {
//     if (gameOverScreenActivated === false) {
//       gameOverScreenActivated = true;
//       mkLaugh.play();
//       mkLaugh.loop = false;
//       setTimeout(function() {
//         console.log('six seconds later');
//         gameOver = true;
//       }, 15000);
//     }
//   }
// }
//
// function gameOverScreen() {
//   if (gameOver) {
//     console.log('here')
//     background(0);
//     textAlign(CENTER);
//     textSize(20);
//     var gameOverText = "SOMEONE HAS TO LOSE\n";
//     gameOverText += "\n";
//     gameOverText += "SUDDEN DEATH!\n";
//     gameOverText += "\n";
//     gameOverText += "ROCK, PAPER, SCISSORS\n";
//     fill(255, 0, 0);
//     text(gameOverText, width / 2, height / 2);
//     mkFinish.play();
//     noLoop();
//   }
// }
