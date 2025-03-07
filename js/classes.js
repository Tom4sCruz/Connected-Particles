export class Particle {
    constructor(x, y, abs_vel, angle, random_bool = false, random_start = 0.8) {
        this.x = x;
        this.y = y;

        if (random_bool) {
            let vel = abs_vel * (random_start + Math.random() * (1 - random_start));
            this.vel = [vel*Math.cos(angle), vel*Math.sin(angle)];
        } else {
            this.vel = [abs_vel*Math.cos(angle), abs_vel*Math.sin(angle)];   // [ vx, vy]
        }
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