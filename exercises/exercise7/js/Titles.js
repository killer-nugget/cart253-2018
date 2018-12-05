var sColor = 0;
//var capture;
function Titles(x, y,h,w, size, color) {
  this.x = x;
  this.y = y;
  this.w=w;
  this.h=h;
  this.size = size;
  this.color = color;
  //this.capture=createCapture(VIDEO);
}
// fx to display the matrix and + message (first screen).
Titles.prototype.firstScreen = function() {
background(255);
fill(this.color);
textAlign(CENTER, CENTER);
text("if you let go, you go back", this.x, this.y);
this.color += 5;
// i'm using the color value as a timer of sorts
if(this.color >= 500){
  fill(sColor);
  textAlign(CENTER, CENTER);
  text("ok, so you WANT to stay", this.x, this.y);
  sColor+=3;
  }
if (sColor >= 500 && keyIsPressed === true) {
      state = 'MATRIX SECOND'
}
  if (keyIsPressed === false) {
// resets this.color & sColor to 0 so user can see it again.
    this.color=0;
    sColor=0;
    state = 'MATRIX';
  }
}
