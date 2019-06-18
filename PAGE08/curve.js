class Curve {
    constructor() {
        this.path = [];
        this.current = createVector();
    }

    setX(x) {
        this.current.x = x;
    }

    setY(y) {
        this.current.y = y;
    }

    addPoint() {
        this.path.push(this.current);
    }

    reset() {
        this.path = [];
    }

    show() {
        stroke(230,150,100);
        strokeWeight(2);
        noFill();
        beginShape();
        for (let i = 0; i < this.path.length; i++) {
            const v = this.path[i];
            vertex(v.x, v.y);
        }
        endShape();
        stroke(230,150,200);
        strokeWeight(35);
        point(this.current.x, this.current.y);
        this.current = createVector();
    }
}