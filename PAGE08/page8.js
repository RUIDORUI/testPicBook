let angle = 0;

function preload(){
    monster = loadImage("08-2.png");
    monsterPAPA = loadImage("08-1.png");
    font1 = loadFont("GenJyuuGothic-Medium.ttf");
  }

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    textFont(font1,30);
}

function draw() {
    background(100,200,200);
    
    let r = 500;
    
    // for (let i = 0; i < 2*PI; i+=0.01) {
    //     let cx = width/2;
    //     let cy = height / 2;
        
    //     let x = r * cos(angle * (i + 1) );
    //     let y = r * sin(angle * (i + 2) +100);
    //     strokeWeight(20);
    //     stroke(240);
    //     point(cx + x, cy + y,30,20);
    //     noFill();
        
    //     //line(cx + x, 0, cx + x, height);

    //     // for (let j = 0; j < rows; j++) {
    //     //     curves[j][i].setX(cy + y);
    //     // }
    // }
    angle += 0.005;

    if (angle > TWO_PI) {
        angle = 0;    
    }
    for (let i = 0; i < 2*PI; i+=1) {  
        let x = 500 * cos(angle * (i + 3) );
        let y = 500 * sin(angle * (i + 4) );
        //tint(255,100*i);
        fill(map(i,0,PI,200,250),200,150);
        ellipse(width/2+x,height/2+y,600,600);
        
        
    }
    
    for (let i = 0; i < 2*PI; i+=1) {  
        let x = 100 * cos(angle * (i + 2) );
        let y = 100 * sin(angle * (i + 4) );
        //tint(255,100*i);
        
        image(monsterPAPA,windowWidth/6+x,windowHeight*0.6+y-(monsterPAPA.height/2),monsterPAPA.width,monsterPAPA.height);
        
    }
    image(monster,windowWidth*0.7,windowHeight/2,monster.width*0.75,monster.height*0.75);
    noStroke();
    fill(25);
    text("夢中的爸爸不發一語的看著怪獸，眼神中似乎透漏著訊息，\n但怪獸只能從那微妙的表情猜測。”\n媽，妳怎麼不一起過來啊?”\n正當怪獸以為就要這樣跟爸爸對看到天亮時。",width*0.55,150);

   
}
