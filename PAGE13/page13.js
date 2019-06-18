

function preload(){
    
    monster = loadImage("logo04.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  textFont(font1,30);
  
    
}

function draw() {
  background(240);
  
  
  
  image(monster,windowWidth*0.4-(monster.width*0.5),windowHeight*0.4,monster.width*0.8,monster.height*0.8);
    
    
  noStroke();
  fill(100);
  text("指導老師：陳思聰、黃惠玲\n版權歸屬：嚴定華",windowWidth*0.4-(monster.width*0.5),windowHeight*0.65);
  startNoise(); 
}

function startNoise() {
   
  noStroke();
  
  for(let i = 0; i<windowWidth; i = i+50){
    for(let j = 0; j < windowHeight; j = j+50){
        fill(0);
        rect(random(-i,i-50),random(-j,j-50),1,1);
    }
  }
  for(let i = 0; i < 10; i++){
    fill(0,random(30,150));
    rect(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),0.1,0.1);
  }
  
}