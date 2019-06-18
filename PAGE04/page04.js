

function preload(){
    
    monster = loadImage("04.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(0, 13, 40);
  textFont(font1,30);
  
    
}

function draw() {
  
  
  // fill(120);
  // rect(0,height*0.6,2000,800);
  if (mouseIsPressed){
    fill(255, 255, 153);
    ellipse(mouseX,mouseY,300,300);
  }
  else{
    fill(0, 13, 26);
    ellipse(mouseX,mouseY,300,300);
  }
  
  
  image(monster,windowWidth*0.75-(monster.width*0.5),windowHeight*0.4,monster.width*0.8,monster.height*0.8);
    
    
  noStroke();
  fill(255);
  text("雖然沒有酒精，但是不知道為甚麼，還是喝醉的怪獸昏昏沉沉的睡著了。",width*0.1,150);
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