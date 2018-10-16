var ball1;
var ball2;
function setup() {
  createCanvas(640,480);
  ball1 = new Ball(10,100,10,5,10,5);
  ball2 = new Ball(200,200,10,5,20,5);
}
function draw() {
  background(0);
  ball1.update();
  ball2.update();
  ball1.display();
  ball2.display();
}
