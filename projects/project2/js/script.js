// It's just Pong!
// a Pong game where every point disadvantages the player.
// And where you win real life prizes!
// by Carlos Giron-Bran

//audio aesthetics of the game, etc.

// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;
////// NEW //////
var state = "TITLE";

var prize;
var r;
var prizeRandom;

var bbArrayL = [];
var bbArrayR = [];
var beep;

function preload(){
  beep = new Audio ("assets/sounds/beep.wav");
}
////// END NEW //////

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(1000, 480);
  // Create a ball
  ball = new Ball(width / 2, height / 2, 5, 5, 10, 5, 10);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 15, DOWN_ARROW, UP_ARROW, 0);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0, height / 2, 10, 60, 15, 83, 87, 0);


  prize = [
    "a poutine.",
    "a cup of coffee.",
    "2 dollars.",
    " a slice of pizza."
  ];

  r = floor(random(0, prize.length));
  prizeRandom = prize[r];

}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0, 0, 0, 150);

  ////// NEW //////
  console.log(state);
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
function displayTitle() {

  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  noStroke();
  // Display the text
  text("It's just\nPONG!", width / 2, height / 2);
  // Font size goes down
  textSize(16);
  // Display the instructions
  text("Press SPACE to play\n player 1: use W and S \n player 2: use Up and Down arrows", width / 2, 3 * height / 4);

  // Check whether the spacebar was pressed to start the game...
  if (keyIsPressed && key === ' ') {
    // ... if it was, change the state to "GAME" so the switch statement in draw()
    // will display the game instead
    state = "GAME";
  }
}

function displayGame() {

  leftPaddle.handleInput();
  rightPaddle.handleInput();


  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {

    // check which side the ball is off screen and gives points.
    if (ball.x + ball.size < 0) {
      leftPaddle.score++;
      bbArrayL.push(new BadBall(random(11, width / 2), random(0, height), 5));
    }

    if (ball.x > width) {
      rightPaddle.score++;
      bbArrayR.push(new BadBall(random(width - 11, width / 2), random(0, height), 5));

    }
    ////// NEW END //////
    ball.reset();
  }


  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();

  for (var i = 0; i < bbArrayL.length; i++) {
    bbArrayL[i].display();
    bbArrayL[i].collision();
  }
  for (var i = 0; i < bbArrayR.length; i++) {
    bbArrayR[i].display();
    bbArrayR[i].collision();
  }

  leftPaddle.display();
  rightPaddle.display();

  // rightBadBall.display();
  // leftBadBall.display();

  ////// NEW //////
  // scores displays when player makes it first point.
  if (rightPaddle.score >= 1) {
    rightPaddle.showScoreboardRight();
  }

  if (leftPaddle.score >= 1) {
    leftPaddle.showScoreboardLeft();
  }
  // checks for winning condition and stops game.
  if (rightPaddle.score === 15 || leftPaddle.score === 15) {
    state = "GAME OVER";
  }


}

function displayGameOver() {
  background(127, 0, 0);

  if (rightPaddle.score >= 1) {
    rightPaddle.showScoreboardRight();
  }

  if (leftPaddle.score >= 1) {
    leftPaddle.showScoreboardLeft();
  }

  ball.display();

  leftPaddle.display();
  rightPaddle.display();

  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  noStroke();
  /// I really don't know why they are inverted here
  if (rightPaddle.score === 15) {
    text("Player 1 is\nsuperior!", width / 2, 0.5 * height / 2);
    push();
    textSize(16);
    text("Player 2 owes you" + " " + prizeRandom, width / 2, (0.5 * height / 2) + 50);
    text("press spacebar to rematch", width / 2, 1.5 * height / 2);
    pop();


  }
  if (leftPaddle.score === 15) {
    text("Player 2 is\nsuperior!", width / 2, 0.5 * height / 2);
    push();
    textSize(16);
    text("Player 1 owes you" + " " + prizeRandom, width / 2, (0.5 * height / 2) + 50);
    text("press spacebar to rematch", width / 2, 1.5 * height / 2);
    pop();

  }

  //when spacebar is pressed, reset score and restart the game.
  if (keyIsPressed && key === ' ') {
    rightPaddle.scoreReset();
    leftPaddle.scoreReset();
    bbArrayL=[];
    bbArrayR=[];
    state = "GAME";
  }
}
