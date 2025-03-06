import { Particle } from "./classes.js";

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
}

const N_PARTICLES = 2;
const ABSOLUTE_VELOCITY = 1.5;

const MIDDLE_SCREEN_X = window.innerWidth/2;
const MIDDLE_SCREEN_Y = window.innerHeight/2;

const DELTA_TIME = 1;

let particles = [];

for (let i=0; i<N_PARTICLES; i++) {
    particles.push(new Particle(MIDDLE_SCREEN_X , MIDDLE_SCREEN_Y, ABSOLUTE_VELOCITY, i*Math.PI/4));
}

function draw() {
    background(220);
    for (let i = 0; i< particles.length; i++) {
        circle(particles[i].x, particles[i].y, 20);
        particles[i].update(DELTA_TIME);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;