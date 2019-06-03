
let yPos;
let off1,off2;
let bubbles = [];
let monster,font1;

function preload(){
  monster = loadImage("02.png");
  font1 = loadFont("GenJyuuGothic-Medium.ttf");
}

function setup(){
  textFont(font1,40);
  createCanvas(windowWidth,windowHeight);
  for(let i = 0; i < 100; i++){
    bubbles[i] = new bubble(random(0,windowWidth),random(300,windowHeight),random(5,50));
  }
  off2 = 0;
}
function draw(){
  off1 = 0;
  background(255);
  fill(map(noise(off2),0,1,200,255),203,5);
  noStroke();

  beginShape();
  for(let i = 0; i <= windowWidth; i = i +1){
    yPos = map(noise(off1,off2),0,1,100,300);
    vertex(i,yPos);
    off1 = off1 +0.005;
  }

  off2 = off2 + 0.005;
  vertex(windowWidth,windowHeight);
  vertex(0,windowHeight);
  endShape(CLOSE);

  image(monster,windowWidth/2-(monster.width/2),windowHeight/2-(monster.height/2)+50);

  for(let i = 0; i < bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].up();
  }
  
  
}

function bubble(x,y,r){
  this.bx = x;
  this.by = y;
  this.br = r;

  this.show = function(){
    fill(255,150);
    stroke(255,220);
    strokeWeight(1);
    ellipse(this.bx,this.by,this.br);
    if(this.by < 0)this.by = y+100;
  }

  this.up = function(){
    this.bx = this.bx + random(-0.5,0.5);
    this.by = this.by - 1; 
    
  }
}

