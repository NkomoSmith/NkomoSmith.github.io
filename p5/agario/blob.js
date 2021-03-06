function Blob(x, y, r) {
    this.pos = createVector(x,y);
    this.r = r;
    this.vel = createVector(0,0);
    this.color= (color(random(255), random(255), random(255)))

    this.update = function() {
        var newvel = createVector(mouseX-width/2, mouseY-height/2);
        newvel.setMag(3);
        this.vel.lerp(newvel, 0.1);
        this.pos.add(this.vel);
    }

    this.eats = function(other) {
        var d = p5.Vector.dist(this.pos, other.pos);
        if (d < this.r + other.r) {
            var sum = PI * this.r * this.r + PI * other.r * other.r;
            this.r = sqrt(sum / PI);

          return true;
        } else {
          return false;
        }
    }
    this.show = function() {
    noStroke();
    fill(this.color)
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
}
}

function Player(x, y, r) {
    this.pos = createVector(x,y);
    this.r = r;
    this.vel = createVector(0,0);

    this.update = function() {
        var newvel = createVector(mouseX-width/2, mouseY-height/2);
        newvel.setMag(3);
        this.vel.lerp(newvel, 0.1);
        this.pos.add(this.vel);
    }

    this.eats = function(other) {
        var d = p5.Vector.dist(this.pos, other.pos);
        if (d < this.r + other.r) {
            var sum = PI * this.r * this.r + PI * other.r * other.r;
            this.r = sqrt(sum / PI);

          return true;
        } else {
          return false;
        }
    }
    this.show = function() {
        strokeWeight(10);
        stroke(170, 3, 3);
        fill(224, 6, 6);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }
}

