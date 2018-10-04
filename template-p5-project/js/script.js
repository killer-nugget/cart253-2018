
var pointsMax=100;
var points;
var tx=0;
var ty=0;
var x=0;


function setup() {
  createCanvas(1000,500);
  background(51);
  noStroke();
  fill(random(255),random(255),random(255),175);

}

function draw() {
if (x<width) {
  drawSq();
  console.log('drawing');
  }
else {
  resetAtt();
  console.log('and another one!');
}


}
function drawSq(){
  var y = height*noise(ty);
  ellipse(x,y,5,5);
  x+=0.75;
  ty+= 0.01;
}
function resetAtt(){
  x=0;
  noStroke();
  fill(random(255),random(255),random(255),175);
}
