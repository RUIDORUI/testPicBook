let circle1;
function setup(){
    createCanvas(windowWidth,windowHeight);
    circle1 = new noiseCircle(windowWidth/2,windowHeight/2,300,color('#004a2f'));
    circle2 = new noiseCircle(windowWidth/2,windowHeight/2,200,color('#ffa323'));
    circle3 = new noiseCircle(windowWidth/2,windowHeight/2,100,color('#ff6337'));
}
function draw(){
  background(0);
  circle1.show();
  circle2.show(); 
  circle3.show(); 
  fill(255);
  textSize(100);
  text(circle1.off,100,100);
}
function noiseCircle(circleX,circleY,r,color){
  this.x = circleX;
  this.y = circleY;
  this.r = r;
  this.off = 0;
  this.show = function(){
    
    let off2 = 0;
    push();
    translate(this.x,this.y);
    beginShape();
    for(let a = 0; a < 2*Math.PI; a +=0.1){
        
        this.r = r + map(noise(off2+this.off),0,1,-50,50);
        let cX = cos(a)*this.r;
        let cY = sin(a)*this.r;
        fill(color);
        noStroke();
        vertex(cX,cY);
        off2 += 0.01;
    }
    endShape();
    this.off = this.off + 0.01;
    pop();  
    
  }
}