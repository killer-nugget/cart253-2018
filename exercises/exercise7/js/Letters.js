var randomLetter;
var dispLetter;

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
  fill(0, 255, 0);
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
