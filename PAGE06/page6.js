let angle = 0;
let num = 0;
let x,y,r;
let xoff,yoff,moff;
function preload(){
    
    monsterPAPA = loadImage("07.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    textFont(font1,30);

    moff = 1;
}

function draw() {
  background(240);
  push();  
  translate(windowWidth/2,windowHeight/2);
  fill(200);
  beginShape();
  for(let a = 0; a < Math.PI*2; a += 0.01)
  { xoff = cos(a)+moff;
    yoff = sin(a)+moff;
    r = map(noise(xoff,yoff),0,1,200,500);
    x = r *cos(a);
    y = r *sin(a);
    
    vertex(x,y);
  }
  endShape();
  pop();
  moff = moff + 0.01;

    image(monsterPAPA,windowWidth*0.55-(monsterPAPA.width*0.5),windowHeight*0.3,monsterPAPA.width*0.75,monsterPAPA.height*0.75);
    filter(GRAY);
    filter(BLUR,random(9,12));
    
      noStroke();
      fill(25);
      text("突然間，夢裡浮現一張熟悉的面孔。",width*0.1,150);
   
}