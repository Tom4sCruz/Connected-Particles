import { DIAMETER_PARTICLE } from "./main.js"

export function collided_x (x) {
    return x <= DIAMETER_PARTICLE/2 || x >= window.innerWidth - DIAMETER_PARTICLE/2;
}

export function collided_y (y) {
    return y <= DIAMETER_PARTICLE/2 || y >= window.innerHeight - DIAMETER_PARTICLE/2;
}

/*

export function alpha_value (distance) {
    return 1000 * 10 / distance;
}

*/

export function alpha_value(distance) {
    /* Uses sigmoid function to set alpha_value */
    
    const k = 255; // max_alpha
    const b = 0.01;   // steepness of curve
    const a = -1; // how soon does the alpha value drop

    return k / (1 + Math.exp( a + b * distance));
  }