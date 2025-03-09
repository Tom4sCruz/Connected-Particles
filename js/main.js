import { Particle } from "./classes.js";
import { collided_x, collided_y, alpha_value } from "./functions.js";

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

const N_PARTICLES = 120;
const ABSOLUTE_VELOCITY = 1;
export const DIAMETER_PARTICLE = 0;
const WHITE = 255;

const MAX_DISTANCE = 650;

const RANDOM_START = 0.5; // minimum velocity = 50% of ABSOLUTE_VELOCITY

export const LIMIT_RIGHT = window.innerWidth;
export const LIMIT_BOTTOM = window.innerHeight;

const DELTA_TIME = 1;

let particles = [];

for (let i=0; i<N_PARTICLES; i++) {
    particles.push(new Particle(LIMIT_RIGHT * Math.random() , LIMIT_BOTTOM * Math.random(), ABSOLUTE_VELOCITY, i * 2*Math.PI/N_PARTICLES, true, RANDOM_START));
}

function draw() {
    noStroke();
    background(0);
    for (let i = 0; i < particles.length; i++) {
        //circle(particles[i].x, particles[i].y, DIAMETER_PARTICLE);
        particles[i].update(DELTA_TIME);
    }

    for (let i = 0; i < particles.length; i++) {
        const x_pos = particles[i].x;
        const y_pos = particles[i].y;
        
        if (collided_x(x_pos)) {
            particles[i].setVx(-particles[i].vel[0]);
        }
        if (collided_y(y_pos)) {
            particles[i].setVy(-particles[i].vel[1]);
        }
    }

    for (let i = 0; i < particles.length-1; i++) {
        const x_pos_i = particles[i].x;
        const y_pos_i = particles[i].y;
        for (let j = i+1; j < particles.length; j++) {
            const x_pos_j = particles[j].x;
            const y_pos_j = particles[j].y;
            
            const distance = dist(x_pos_i, y_pos_i, x_pos_j, y_pos_j);
            
            if (distance > MAX_DISTANCE) continue;
            
            stroke(WHITE, alpha_value(distance));
            line(x_pos_i, y_pos_i, x_pos_j, y_pos_j);
        } 
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;