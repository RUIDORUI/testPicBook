let n = 0;
let c = 30;
let one = 1;
let start = 20;

function preload(){
    
    monster = loadImage("11.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    textFont(font1,30);
    angleMode(DEGREES);
    colorMode(HSB);
    
}

function draw() {
  background(255);
  push();
  translate(width / 2, height / 2);
  rotate(n * 0.3);
  //n = map(mouseX,0,windowWidth,0,1000);
  for (let i = 0; i < n; i++) {
    let a = i * 137.3;
    let r = c * sqrt(i);
    let x = r * cos(a);
    let y = r * sin(a);
    let hu = sin(start + i );
    hu = map(hu, -1, 1, 0, 360);
    fill(hu*0.5, hu*0.2,200,100);
    noStroke();
    ellipse(x, y,30, 30);
  }
  n  = n+ one;;
  start +=1;
  
  if(n > 400){one *= -1;}
  else if( n < 0){one = one*-1}
  pop();

  image(monster,windowWidth*0.25-(monster.width*0.5),windowHeight*0.1,monster.width*0.75,monster.height*0.75);
    
    
  noStroke();
  fill(25);
  text("沒錯，我就是我自己啊，阿哈哈哈哈。\n重新體認到自身存在的怪獸，\n甩開煩惱，不再有顧慮地做自己。",width*0.6,150);
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
    rect(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),1,1);
  }
  
}