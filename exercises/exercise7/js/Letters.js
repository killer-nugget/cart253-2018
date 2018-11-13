var randomLetter;
var dispLetter;

function Letters(x,y,vx,vy,size,maxV){
  this.x=x;
  this.y=y;
  this.vx=vx;
  this.vy=vy;
  this.maxV=maxV;
  this.size=size;
}

Letters.prototype.randomize = function(){
  randomLetter = floor(random(48,90))
  dispLetter = String.fromCharCode(randomLetter);
}

Letters.prototype.display = function (){
  fill(0,255,0);
  textSize(this.size);
  text(dispLetter,this.x,this.y);
}

Letters.prototype.down = function(){
  this.vy = this.y
  this.y+=this.size;
  if (this.y-this.size > height) {
    this.y-=random(600,700);
  }
}
