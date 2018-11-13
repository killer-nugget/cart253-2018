// Matrix scroll-in (prototype 1)
// this program will let you get into the matrix.
// scrolling up will get you "inside matrix".
// everything gets whiter until full white.
// you're in!
// pray for it not to crash in the proccess
// by Carlos Giron-Bran

var letters=[];
var letterSize=20;

function setup() {
frameRate(24);
createCanvas(500,500);
for (var x= 0; x < width; x+=letterSize) {
  for (var y = random(-600,-700); y < random(0,-100); y+=letterSize) {
    letters.push(new Letters(x,y,0,0,letterSize));
    }
  }
}

function draw() {
background(0,0,0,200);
  matrix();

}

function matrix(){
  for (var i = 0; i < letters.length; i++) {
    letters[i].randomize();
    letters[i].display();
    letters[i].down();
  }


}
