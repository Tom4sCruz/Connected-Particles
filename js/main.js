import { Particle } from "./classes.js";
import { collided_x, collided_y, alpha_value } from "./functions.js";

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

const N_PARTICLES = 200;
const ABSOLUTE_VELOCITY = 1.5;
export const DIAMETER_PARTICLE = 0;

const MIDDLE_SCREEN_X = window.innerWidth/2;
const MIDDLE_SCREEN_Y = window.innerHeight/2;

const DELTA_TIME = 1;

let particles = [];

for (let i=0; i<N_PARTICLES; i++) {
    particles.push(new Particle(MIDDLE_SCREEN_X , MIDDLE_SCREEN_Y, ABSOLUTE_VELOCITY, i * 2*Math.PI/N_PARTICLES, true, 0.1));
}

function draw() {
    noStroke();
    background(0);
    for (let i = 0; i < particles.length; i++) {
        //circle(particles[i].x, particles[i].y, DIAMETER_PARTICLE);
        particles[i].update(DELTA_TIME);
    }

    for (let i = 0; i < particles.length; i++) {
        if (collided_x(particles[i].x)) {
            particles[i].setVx(-particles[i].vel[0]);
        }
        if (collided_y(particles[i].y)) {
            particles[i].setVy(-particles[i].vel[1]);
        }
    }

    for (let i = 0; i < particles.length-1; i++) {
        for (let j = i+1; j < particles.length; j++) {
            let distance = dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            stroke(255, alpha_value(distance));
            line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        } 
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;