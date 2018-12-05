var capture;
function Webcam(x, y,h,w, size, color) {
  this.x = x;
  this.y = y;
  this.w=w;
  this.h=h;
  //this.capture=createCapture(VIDEO);
}
// second screen is a self reflective activity. (have to add if --> keyIspressed === false, you go back again)
Webcam.prototype.display = function() {
  capture = createCapture(VIDEO);
  //capture.hide();
  imageMode(CENTER);
  image(capture, width/2, height/2, this.w, this.w * capture.height / capture.width);
  filter(POSTERIZE,8);
  filter(GRAY);
   if (keyIsDown(ESCAPE)) {
     console.log('key is down');
       state = 'MATRIX';
       console.log(state);
   }
 }
