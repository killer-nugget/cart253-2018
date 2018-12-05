
function Webcam(x,y,h,w) {
  this.x = x;
  this.y = y;
  this.w=w;
  this.h=h;
  this.capture=createCapture(VIDEO);

}
// second screen is a self reflective activity.
Webcam.prototype.display = function() {
  imageMode(CENTER);
  image(this.capture, this.x, this.y, this.w, this.w * this.capture.height / this.capture.width);
  filter(POSTERIZE,8);
  filter(GRAY);
  fill(255, 204, 0);
  textSize(20)
  textAlign(CENTER, CENTER);
  text("if you go back, you can never come back", this.x, 32);
  text("ESC?", this.x, height-32);
   if (keyIsDown(ESCAPE)) {
       state = 'FINAL';
   }
 }
