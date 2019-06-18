
let angle = 0;
function preload(){
    
    monster = loadImage("02.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  textFont(font1,30);
  circle1 = new noiseCircle(windowWidth/2,windowHeight/2,400,color(' #ffff1a'));
  circle2 = new noiseCircle(windowWidth/2,windowHeight/2,300,color('#ffdb4d'));
  circle3 = new noiseCircle(windowWidth/2,windowHeight/2,200,color('#ffaa00'));
    
}

function draw() {
  background(0, 50, 80);
  
  
    circle1.show();
    circle2.show(); 
    circle3.show(); 
  
  image(monster,windowWidth*0.55-(monster.width*0.5),windowHeight*0.2,monster.width*0.8,monster.height*0.8);
    
    
  noStroke();
  fill(255);
  textFont(font1,30);
  text("我不考慮比我善良的男生。",width*0.1,350);
  text("吃素的怪獸還叫做怪獸嗎?",width*0.87,350);
  text("先去做一點壞事再來吧。",width*0.15,750);
  text("你的臉。",width*0.8,700);
  fill(0);
  textFont(font1,40);
  textAlign(CENTER);
  text("諸如此類拒絕的話語\n不斷的重新上演。",width*0.5,450);
  startNoise(); 
}

function startNoise() {
   
  noStroke();
  
  for(let i = 0; i<windowWidth; i = i+50){
    for(let j = 0; j < windowHeight; j = j+50){
        fill(0);
        rect(random(-i,i-50),random(-j,j-50),0.1,0.1);
    }
  }
  for(let i = 0; i < 10; i++){
    fill(0,random(30,150));
    rect(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),0.1,0.1);
  }
  
}

function noiseCircle(circleX,circleY,r,color){
  this.x = circleX;
  this.y = circleY;
  this.r = r;
  this.off = 0;
  this.show = function(){
    
    let off2 = 0;
    push();
    translate(this.x,this.y);
    beginShape();
    for(let a = 0; a < 2*Math.PI; a +=0.1){
        
        this.r = r + map(noise(off2+this.off),0,1,-200,200);
        let cX = cos(a-PI)*this.r;
        let cY = sin(a-PI)*this.r;
        fill(color);
        noStroke();
        vertex(cX,cY);
        off2 += 0.01;
    }
    endShape();
    this.off = this.off + 0.01;
    pop();  
    
  }
}