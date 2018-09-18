var typedText = "";
function setup() {
  createCanvas(500,500);
  textSize(24);
  textAlign(CENTER,CENTER);
}
function draw() {
  background(255);
  text(typedText,width/2,height/2);
}
function keyTyped() {
  typedText += key;
}
