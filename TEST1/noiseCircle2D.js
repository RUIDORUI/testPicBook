let x,y,r;
let xoff,yoff,moff;
function setup(){
  createCanvas(windowWidth,windowHeight);
  moff = 1;
}
function draw(){
  background(0);
  translate(windowWidth/2,windowHeight/2);
  fill(255);
  beginShape();
  for(let a = Math.PI; a < Math.PI*2; a += 0.01)
  { xoff = cos(a)+moff;
    yoff = sin(a)+moff;
    r = map(noise(xoff,yoff),0,1,100,200);
    x = r *cos(a);
    y = r *sin(a);
    
    vertex(x,y);
  }
  endShape();
  moff = moff + 0.01;
}