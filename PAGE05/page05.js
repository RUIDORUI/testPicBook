let cMoving = [];
let r;
let grow;
let index;

function preload(){
    
    monster = loadImage("05.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    textFont(font1,30);
    for(let i = 0; i < 400; i++){
      cMoving[i] = new cir();
  };
  r = 0;
  index = 1;
  
    
}

function draw() {
  background(100);
  stroke(255);
  strokeWeight(25);
  for(let i = 0; i < cMoving.length; i++){
      fill(80)
        
      cMoving[i].show();

      if(i ==0 && cMoving[i].r < 2000 )cMoving[i].grow();
      else if(i!=0 && cMoving[i-1].r >150 && cMoving[i].r < 2000)cMoving[i].grow();

      if(i!=0 && cMoving[i].r == 2000 && cMoving[i-1].r ==2000){
          cMoving.push(new cir());
          cMoving.splice(0,1);
          index = index*-1;
      };
        
  };

  image(monster,windowWidth*0.55-(monster.width*0.5),windowHeight*0.3,monster.width*0.75,monster.height*0.75);
    
    
  noStroke();
  fill(25);
  text("到了夜晚，那些令人心碎的情節不斷的在怪獸的夢中輪迴著。",width*0.27,150);
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

function cir(){
  this.r = 0;
  
    this.show = function(){
        
        push();
        translate(windowWidth/2,windowHeight/2);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    this.grow = function(){
        this.r = this.r+3;
    }
}