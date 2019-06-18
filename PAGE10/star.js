function Star(){
    this.x = random(-width/2,width/2);
    this.y = random(-height/2,height/2);
    this.zx = random(width/2);
    this.zy = height/2;
    this.color = color(random(180,250),230,random(180,250));
    
    this.show = function(){
        
        //let ry = map(this.y,0,height/2,0,50);
        let sx = map(this.x/this.zx,0,1,0,width/2);
        let sy = map(this.y/this.zx,0,1,0,height/2);
        noStroke();
        
        fill(this.color);
        let rx = map(this.zx,0,width/2,100,0);
        let ry = map(sy,0,height/2,0,50);
        ellipse(sx,sy,rx,rx);
    }
    this.update = function(){
        this.zx = this.zx-speed;
        
        
        if(this.zx < 1 ){
            
            this.x = random(-width/2,width/2);
            this.y = random(-height/2,height/2);
            this.zx = width/2;
            this.zy = height/2;
            //this.colorChange();
        }
        
        
    }
    this.colorChange = function(){
        this.color = color(random(0,150));
    }

}