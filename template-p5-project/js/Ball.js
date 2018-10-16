function Ball(x,y,vx,vy,size,speed,) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.vx = vx;
  this.vy = vy;

}
Ball.prototype.update = function () {
   this.x += this.vx;
   this.y += this.vy;
   if(this.x+this.size>width || this.x<0){
     this.reset();
   }

   if ( this.y+this.size>height||this.y<0){
     this.vy=-this.vy;
   }

}
Ball.prototype.display = function () {
  fill(255);
  rect(this.x,this.y,this.size,this.size);
}

Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
