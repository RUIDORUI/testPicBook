


function preload(){
    
    monsterPAPA = loadImage("09.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    textFont(font1,30);
    frameRate(20);
    
}

function draw() {
  background(255);
  push();  
  translate(windowWidth/2,windowHeight/2);
  fill(150,180,240,150);
  beginShape()
  for(let a = 0; a < Math.PI*2; a += 0.01)
  { 
    r = random(150,350);
    let x = r *cos(a);
    let y = r *sin(a);
    
    vertex(x,y);
  }
  endShape(CLOSE);

  fill(150,180,240,150);
  beginShape()
  for(let a = 0; a < Math.PI*2; a += 0.02)
  { 
    r = random(250,450);
    let x = r *cos(a);
    let y = r *sin(a);
    
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
  

  image(monsterPAPA,windowWidth*0.55-(monsterPAPA.width*0.5),windowHeight*0.3,monsterPAPA.width*0.75,monsterPAPA.height*0.75);
    
    
      noStroke();
      fill(25);
      text("突然間，“你就是你自己啊!!!”\n怪獸爸爸大喊了一聲，\n留下一段看似意味深長但更像是廢話的句子後，\n夢醒了",width*0.1,150);
   
}