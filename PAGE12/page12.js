let fireworks = [];
let gravity;

function preload(){
    
    monster = loadImage("12.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    textFont(font1,30);
    
    gravity = createVector(0, 0.1);
    stroke(255);
    strokeWeight(4);
    
}

function draw() {
  colorMode(RGB);
  background(50, 25);
  fill(254, 242, 78,200);
  noStroke();
  ellipse(width/2-70,height/2+30,500,500);
  
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }

  image(monster,windowWidth*0.5-(monster.width*0.5),windowHeight*0.3,monster.width*0.8,monster.height*0.8);
    
    
  noStroke();
  fill(255);
  text("然後，就這樣，\n直到世界末日，怪獸還是一個人，\n阿哈哈哈哈哈。",width*0.7,150);
  //startNoise(); 
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
    rect(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),1,1);
  }
  
}