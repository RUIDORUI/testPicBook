let stars = [];
let speed;
let fontsize = 100;


function setup(){
    
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i<80; i++){
        stars[i] = new Star();
    }
    
    
}
function draw(){
    
    background(255);
    translate(width/2,height/2);
    speed = map(mouseX,0,width,0,30);
    for(let i =0; i<stars.length; i++){
        stars[i].update();
        stars[i].show();
        
    }
    
    //fill(255,255,0);
    ellipse(-width/2+50,0,100,100);
    textSize(50);
    text(mouseX,0,0);
    text(mouseY,0,50);
    text(speed,0,100);
    
    startNoise();
}
function startNoise() {
   
    noStroke();
    
    for(let i = 0; i<windowWidth/2; i = i+50){
      for(let j = 0; j < windowHeight/2; j = j+50){
          fill(0);
          rect(random(-i,i-50),random(-j,j-50),0.5,0.5);
      }
    }
    for(let i = 0; i < 10; i++){
      fill(0,random(30,50));
      rect(random(-windowWidth/2,windowWidth/2),random(-windowHeight/2,windowHeight/2),1,1);
    }
    
  }


