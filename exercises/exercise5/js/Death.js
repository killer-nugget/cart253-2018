function Death(){
  this.gameOverScreenActivated=false;
  this.gameOver=false;
}

Death.prototype.startCount = function () {
  if (leftPaddle.score === 10 || rightPaddle.score === 10) {
    if (this.gameOverScreenActivated === false) {
      this.gameOverScreenActivated = true;
      mkLaugh.play();
      mkLaugh.loop = false;
      var context = this;
      setTimeout(function() {
        console.log('15 seconds later');
        context.gameOver = true;
      }, 15000);
    }
  }
}

Death.prototype.gameOverScreen=function() {
  if (this.gameOver) {
    console.log('here')
    background(0);
    textAlign(CENTER);
    textSize(20);
    var gameOverText = "SOMEONE HAS TO LOSE\n";
    gameOverText += "\n";
    gameOverText += "SUDDEN DEATH!\n";
    gameOverText += "\n";
    gameOverText += "ROCK, PAPER, SCISSORS\n";
    fill(255, 0, 0);
    text(gameOverText, width / 2, height / 2);
    mkFinish.play();
    noLoop();
  }
}
