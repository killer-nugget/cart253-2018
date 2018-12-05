var randomLetter;
var dispLetter;
// color variables I can change depending of state.
var matrixColor;
var matrixColorF;
function Letters(x, y, vx, vy, size) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
}
// fx to randomize keycode between 48 and 90 and round it
// from the keycode, display the character attached to keycode.
Letters.prototype.randomize = function() {
  randomLetter = floor(random(48, 90))
  dispLetter = String.fromCharCode(randomLetter);
}
// display randomizing letters
Letters.prototype.display = function() {
// defining colors for matrix and Final Matrix
  matrixColor=color(0,255,0);
  matrixColorF=color(255,0,0);
// if statement to change color of letters if in FINAL state.
//I did this so i wouldn't have to make another Letters object just for the FINAL state.
  if (state==='FINAL') {
  fill(matrixColorF);
} else {
    fill(matrixColor);
}
  textFont(myFont);
  textSize(this.size);
  text(dispLetter, this.x, this.y);

}
// fx to add velocity downwards to the randomizing letters.
// and move it by the size of the letters so I can change it on the fly.
// if() to make the letters restart in random height above the canvas.
// rain effect/matrix effect.
Letters.prototype.down = function() {
  this.vy = this.y
  this.y += this.size;
  if (this.y - this.size > height) {
    this.y -= random(600, 700);
  }
}
