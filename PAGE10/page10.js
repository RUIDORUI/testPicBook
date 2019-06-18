let stars = [];
let stars2 = [];
let speed;


function preload(){
    
    monster = loadImage("10.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    textFont(font1,30);
    

  for(let i = 0; i<150; i++){
    stars[i] = new Star();
  }
  for(let i = 0; i<50; i++){
    stars2[i] = new Star();
  }
    
}

function draw() {
  background(255);
  push();
  translate(width/2,height/2);
  speed = map(mouseX,0,width,0,10);
  for(let i =0; i<stars.length; i++){
      stars[i].update();
      stars[i].show();
        
  }
    
  //fill(255,255,0);
  
  pop();    
  startNoise();
  

  image(monster,windowWidth*0.55-(monster.width*0.5),windowHeight*0.3,monster.width*0.75,monster.height*0.75);
  push();
  translate(width/2,height/2);
  speed = map(mouseX,0,width,0,10);
  for(let i =0; i<stars2.length; i++){
      stars2[i].update();
      stars2[i].show();
        
  }
    
  //fill(255,255,0);
  
  pop();    
    
  noStroke();
  fill(25);
  text("或許是那異於常人的理解力\n或是家人間的相互了解或是甚麼之類的吧，\n怪獸的內心像是頓悟般豁然開朗。",width*0.1,150);
   
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
    fill(0,random(30,50));
    rect(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),1,1);
  }
  
}