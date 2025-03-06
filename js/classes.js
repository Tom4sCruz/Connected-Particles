export class Particle {
    constructor(x, y, abs_vel, angle) {
        this.x = x;
        this.y = y;
        this.vel = [abs_vel*Math.cos(angle), abs_vel*Math.sin(angle)];   // [ vx, vy]
    }

    setPos (x, y) {
        this.x = x;
        this.y = y;
    }

    setVx (vx) {
        this.vel[0] = vx;
    }

    setVy (vy) {
        this.vel[1] = vy;
    }

    update (t) {
        this.x += this.vel[0] * t;
        this.y += this.vel[1] * t;
    }
}