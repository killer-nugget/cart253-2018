// Score keeping

function Score (){
  this.scoreL = 0;
  this.scoreR = 0;
}

//
Score.prototype.startScore = function(){
  this.scoreL = 0;
  this.scoreR = 0;
  }

Score.prototype.updateScore = function(){

  if (ball.x + ball.size < 0 ) {
    this.scoreR++;
    console.log('right:'+this.scoreR);
  }

  if (ball.x > width ) {
    this.scoreL++;
    console.log('left:'+this.scoreL);
  }


}
