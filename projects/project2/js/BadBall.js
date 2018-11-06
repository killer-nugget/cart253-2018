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
