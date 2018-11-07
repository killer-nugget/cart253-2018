// This ball will appear when a point is made,on the screen and will not move.
// will appear on opposite side of point.
// but if touched by the ball it'll bounce off of it.

function BadBall(x,y,size){
  this.x = x;
  this.y = y;
  this.size = size;
  this.bbColor= color(255,0,0);
}

BadBall.prototype.display= function(){

    fill(this.bbColor);
    rect(this.x,this.y,this.size,this.size);
}

BadBall.prototype.collision= function(){
  // handle collision w/ ball
    if (this.x + this.size > ball.x && this.x < ball.x + ball.size) {
      // Check if the ball overlaps the paddle on y axis
      if (this.y + this.size > ball.y && this.y < ball.y + ball.size) {
        beep.play();
        // If so, move ball back to previous position (by subtracting current velocity)
        ball.x -= ball.vx;
        ball.y -= ball.vy;
        // Reverse x velocity to bounce
        ball.vx = -ball.vx;
      }
    }
}
