function Particle(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);
    
    if (this.firework) {
      this.vel = createVector(0, random(-12, -8));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 10));
    }
   
    this.applyForce = function(force) {
      this.acc.add(force);
    }
  
    this.update = function() {
      if (!this.firework) {
        this.vel.mult(0.9);
        this.lifespan -= 4;
      }
      
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    this.done = function() {
      if (this.lifespan < 0) {
        return true;
      } else {
        return false;
      }
    }
  
    this.show = function() {
      colorMode(RGB);
      
      if (!this.firework) {
        strokeWeight(map(this.lifespan,0,255,3,10));
        stroke(hu, 150, random(200), this.lifespan);
      } else {
        strokeWeight(10);
        stroke(hu, 185, random(180));
      }
      
      point(this.pos.x, this.pos.y);
    }
  }