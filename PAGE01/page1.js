
let dropW,dropH;
let rainingB = [];
let rainingF = [];
let monster,font1;
function preload(){
  monster = loadImage("01.png");
  font1 = loadFont("GenJyuuGothic-Medium.ttf");
}
function setup(){
  textFont(font1,40);
  
    createCanvas(windowWidth,windowHeight);
    for(let i = 0; i < 200; i++){
      rainingF[i] = new raindrop(random(windowWidth),random(-500,windowHeight-50),3,0.1);
    }
    
    for(let i = 0; i < 300; i++){
      rainingB[i] = new raindrop(random(windowWidth),random(-500,windowHeight-50),3,0.1);
    }
    
}
function draw(){
    background(255);
    for(let i =0; i<rainingB.length; i++){
      rainingB[i].rainFall();
    }
    image(monster,windowWidth/2-(monster.width/2),windowHeight/2-(monster.height/2));
    for(let i =0; i<rainingF.length; i++){
      rainingF[i].rainFall();
    }
    fill(25);
    text("就在今天，怪獸的第一千次告白，又失敗了\n到底是為甚麼……，怪獸心裡不斷的思索著",30,150);
    
    
    
}

function raindrop(posX,posY,v,a){
  this.x = posX;
  this.y = posY;
  this.v = v;
  this.a = a;
  let dropW,dropH;
  let rainC = color(50,200,250);

  this.rainFall = function(){
    noStroke();  
    fill(rainC);  

    dropW = map(this.y,-500,windowHeight,random(10,20),2);
    dropH = map(this.y,-500,windowHeight,20,15);
    ellipse(this.x,this.y,dropW,dropH);
    this.y = this.y+this.v;
    this.v = this.v+this.a;

    if(this.y > windowHeight+10){
        this.y = random(-500,windowHeight-50);
        this.v = 0;
    }
  }  
}
