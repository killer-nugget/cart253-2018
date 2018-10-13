/******************************************************

Game - Chaser
Pippin Barr

A simple game of cat and mouse.

Physics-based movement, keyboard controls, health/stamina,
sprinting, random movement, screen wrap.

 \\\ We have discussed in class about how for me it is important to keep figure
 abstracted. For me the game is more about chasing an "impossible dream".
 The player is bound to die from chasing the impossible.

The death screen is there to remind the player that he has wasted his time
by chasing what he could never attain.
In fact, the sounds used in the game are very recognisable sfx from Apple devices.
They are used to simulate an exaggerated use of technology.
I feel like these sounds have conditioned me to reach into my pockets
and look at my phone and make sure I didn't miss a call or a message.

The death screen plays the Apple ringtone.
It's like missing the call I and/or player was waiting for.

I think the sounds and the death screen give meaning to abstracted figures.
In a sense, I feel like I have lost touch with reality and everytime I reach
for my phone I waste my time. I could be using that time to get bored.
Boredom is important. It's when I'm bored that I start to think.

My thinking is impaired by technology. \\\

******************************************************/

// Track whether the game is over
// var gameOver = false;
var gameOverTired = false;

// Player position, size, velocity
var playerX;
var playerY;
var playerRadius = 25;
var playerVX = 0;
var playerVY = 0;
var playerMaxSpeed = 5;

// Player health
var playerHealth;
var playerMaxHealth = 255;
// Player fill color
var playerFill = 50;

// Prey position, size, velocity
var preyX;
var preyY;
var preyRadius = 25;
var preyVX;
var preyVY;
var preyMaxSpeed = 7;
// Prey health
var preyHealth;
var preyMaxHealth = 100;
// Prey fill color
var preyFill = 200;

// Amount of health obtained per frame of "eating" the prey
var eatHealth = 10;
// Number of prey eaten during the game
var preyEaten = 0;
var soundIsPlaying = false;

// setup()
//
// Sets up the basic elements of the game

var ringtone;

var sfxNames = [
  "smsIn",
  "smsOut",
  "emailIn",
  "emailOut"
]

var sfxArray = [];

function preload(){
//preload audio array with FOR loop
  for (var i = 0; i < sfxNames.length; i++) {
    sfxArray[i] = new Audio('assets/sounds/' + sfxNames[i] + '.wav');
  }
  ringtone=new Audio ('assets/sounds/ringtone.wav');


}

function playSFXrandom (){
  //Math.floor rounds the nuber downward--> so it can == to index number
  sfxArray[Math.floor(Math.random()*sfxArray.length)].play();
}

function setup() {
  createCanvas(500,500);

  noStroke();

  setupPrey();
  setupPlayer();
}

// setupPrey()
//
// Initialises prey's position, velocity, and health
function setupPrey() {
  preyX = width/5;
  preyY = height/2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4*width/5;
  playerY = height/2;
  playerHealth = playerMaxHealth;
}

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  background(preyX,preyY*2,preyX*0.5);

  if (!soundIsPlaying) {
    soundIsPlaying = true;

    setTimeout(function () {
      soundIsPlaying = false;
    }, 1000)

    playSFXrandom();
  }

  if(!gameOverTired){
    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();
  }
  else{
    background(0);
    showGameOverTired();
    setTimeout(1000);
    ringtone.play();
    noLoop();


  }
}

// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  }
  else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  }
  else {
    playerVY = 0;
  }

  //Check for speed increase if SHIFT key is pressed.
  //Nested the original inputHandle

  if (keyIsDown(SHIFT)){
    //Boost also affect health by 0.5 more loss when boost.
    playerHealth = (constrain(playerHealth - 0.5,0,playerMaxHealth))-0.2;
    var playerBoost = playerMaxSpeed+(playerMaxSpeed/2);

    if (keyIsDown(LEFT_ARROW)) {
      playerVX = -playerBoost;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      playerVX = playerBoost;
    }
    else {
      playerVX = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      playerVY = -playerBoost;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      playerVY = playerBoost;
    }
    else {
      playerVY = 0;
    }

  }

}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX += playerVX;
  playerY += playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    playerX += width;
  }
  else if (playerX > width) {
    playerX -= width;
  }

  if (playerY < 0) {
    playerY += height;
  }
  else if (playerY > height) {
    playerY -= height;
  }
  //try to create a sluggish death! for now it work if you dont die from desappearing first.(don't know what to do yet!)
  if(playerMaxSpeed<=2){
    playerMaxSpeed+=-0.001;
  }
  if(playerMaxSpeed<=0){
    gameOverTired=true;
  }
}

// updateHealth()
//
// Reduce the player's health (every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health, constrain to reasonable range
  playerHealth = constrain(playerHealth - 0.5,0,playerMaxHealth);

  // Check if the player is dead
  if (playerHealth === 0) {
    // If so, the game is over
    gameOverTired = true;
  }
}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  var d = dist(playerX,playerY,preyX,preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = constrain(playerHealth + eatHealth,0,playerMaxHealth);
    // Reduce the prey health
    preyHealth = constrain(preyHealth - eatHealth,0,preyMaxHealth);

    // Check if the prey died
    if (preyHealth === 0) {
      // Move the "new" prey to a random position
      preyX = random(0,width);
      preyY = random(0,height);
      // Give it full health
      preyHealth = preyMaxHealth;
      // Track how many prey were eaten
      preyEaten++;

      //everytime the prey is eaten, the prey and the player slow down at random intervals. But prey never stops completly. Player will die before.
    if(preyEaten++){
      playerMaxSpeed+=-random(0.05,0.5);
      preyMaxSpeed+=-random(0.05,1);
      }
      if(playerMaxSpeed==0){
        playerBoost=0;
      }

    }
  }
}

// movePrey()
//
// Moves the prey based on random velocity changes
function movePrey() {
  // Change the prey's velocity at random intervals
  // random() will be < 0.05 5% of the time, so the prey
  // will change direction on 5% of frames
  if (random() < 0.05) {
    // Set velocity based on random values to get a new direction
    // and speed of movement
    // Use map() to convert from the 0-1 range of the noise() function
    // to the appropriate range of velocities for the prey

    // variables to calculate noise  prey speed. X Y different/separate values!
    var nRspeedX=width*random(map(preyMaxSpeed,-preyMaxSpeed,preyMaxSpeed,0,1));
    var nRspeedY=height*random(map(preyMaxSpeed,-preyMaxSpeed,preyMaxSpeed,0,1));

    preyVX = map(noise(nRspeedX),0,1,-preyMaxSpeed,preyMaxSpeed);
    preyVY = map(noise(nRspeedY),0,1,-preyMaxSpeed,preyMaxSpeed);
  }

  // Update prey position based on velocity
  preyX += preyVX;
  preyY += preyVY;

  // Screen wrapping
  if (preyX < 0) {
    preyX += width;
  }
  else if (preyX > width) {
    preyX -= width;
  }

  if (preyY < 0) {
    preyY += height;
  }
  else if (preyY > height) {
    preyY -= height;
  }
}

// drawPrey()
//
// Draw the prey as an ellipse with alpha based on health
function drawPrey() {
  fill(preyFill,preyHealth);
  ellipse(preyX,preyY,preyRadius*2);
}

// drawPlayer()
//
// Draw the player as an ellipse with alpha based on health
function drawPlayer() {
  fill(playerFill,playerHealth);
  ellipse(playerX,playerY,playerRadius*2);
}

function showGameOverTired(){
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(255);
  var gameOverText = "You've wasted your time\n";
  // gameOverText += "You thaught you caught " + preyEaten + " prey\n";
  gameOverText += "and died of exhaustion.\n";
  gameOverText += "\n";
  gameOverText += "But you were so close.";
  text(gameOverText,width/2,height/2);

}
