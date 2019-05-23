
let yPos;
let xPos;
function setup(){
  createCanvas(windowWidth,windowHeight);
  
  yPos = 0.0;
}

function draw(){
  background(255);  
  fill(255);
  beginShape();
  xPos = 0.0;
  for(let x = 0; x < windowWidth; x = x+7){
    let y = map(noise(xPos,yPos),0,1,windowHeight*0.1,windowHeight*0.5);
    vertex(x,y);
    xPos = xPos + 0.05;  
  }
  yPos = yPos +0.01;
  noStroke();
  fill(255-(noise(yPos)*70),255-(noise(yPos)*50),0);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
  textSize(50);
  //text(noise(xPos),windowWidth*0.5,300);
}