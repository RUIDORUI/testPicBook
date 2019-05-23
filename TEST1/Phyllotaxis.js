var n = 0;
var c = 10;

var points = [];

var start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  rotate(n * 0.3);
  //n = map(mouseX,0,windowWidth,0,1000);
  for (var i = 0; i < n; i++) {
    var a = i * 137.3;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    var hu = sin(start + i );
    hu = map(hu, -1, 1, 0, 360);
    fill(hu/2, hu+100,hu+100);
    noStroke();
    ellipse(x, y,10, 10);
  }
  n += 1;
  start +=1;
  text(n,100,windowHeight/2-50);
}