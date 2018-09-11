//Spiritual self-portrait
//Carlos Giron Bran

//A program that represent my digital spiritual self.



function setup() {


}


function draw() {
  createCanvas(500,500);
  //background(32, 67, 124);
  noStroke();
  background(255, 114, 0);
  fill(255,109,28);
  ellipse(250,250,600,600);
  fill(255, 129, 28);
  ellipse(250,250,500,500);
  fill(255, 146, 58);
  ellipse(250,250,450,450);
  fill(255, 157, 79);
  ellipse(250,250,400,400);
  fill(255, 168, 99);
  ellipse(250,250,350,350);
  fill(255, 179, 119);
  ellipse(250,250,300,300);
  fill(255, 185, 130);
  ellipse(250,250,250,250);
  fill(255, 195, 147);
  ellipse(250,250,200,200);
  fill(255, 204, 163);
  ellipse(250,250,150,150);
  fill(255, 214, 181);
  ellipse(250,250,100,100);
  fill(255, 223, 198);
  ellipse(250,250,50,50);
  fill(255, 232, 214);
  ellipse(250,250,25,25);
  fill(255, 240, 229);
  ellipse(250,250,12.5,12.5);

  //word 'fuck' in the back of the head
  text('fuck',240,250);
  //crown
  noFill();
  strokeWeight(15.0);
  stroke(255, 242, 0);
  ellipse(250,165,370,50);
  //head
  stroke(0,0,0);
  strokeWeight(1.0);
  fill(196, 169, 133);
  rectMode(CENTER);
  rect(250,400,400,480,200);
  //Fill ear holes
  triangle(445,325,445,395,475,390);
  triangle(55,325,55,395,25,390);
  //create right ear
  stroke(0, 0, 0);
  arc(450,350,75,100,4,1);
  arc(450,393,50,50,6,2);
  //create left ear
  arc(50,350,75,100,PI-1,PI-4);
  arc(50,393,50,50,PI-2,PI-6);
  //eye pocket left
  noStroke();
  fill(101, 80, 130,155);
  ellipse(167,360,60,55);
  //eye pocket right
  fill(101, 80, 130,155);
  ellipse(333,360,60,55);
  //eyes setup
  stroke(0,0,0);
  strokeWeight(3.0);
  //left eye
  fill(255,255,255);
  ellipse(170,350,55,55);
  //right eye
  ellipse(330,350,55,55);
  //nose shadow
  strokeWeight(2.0);
  fill(0, 0, 0, 100);
  noStroke();
  rect(250,430,95,50,10,10,20,20);
  //nose
  strokeWeight(2.0);
  fill(196, 169, 133);
  stroke(0,0,0,150);
  rect(250,425,100,50,10,10,20,20);
  //nose line
  strokeWeight(1.5);
  stroke(0,0,0,60);
  line(220,383,280,383);
  //mouth
  stroke(0,0,0);
  line(200,481,280,481);
  line(200,481,215,465);
  //eyebrows
  fill(0,0,0);
  //right
  rect(335,325,73,25,5,10,5,10);
  //left
  rect(165,325,73,25,10,5,10,5);
  //forehead line
  stroke(0,0,0,160);
  line(250,295,250,325);

  //text('fuck',240,250);

}
