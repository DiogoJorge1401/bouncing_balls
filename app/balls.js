import { height, width } from './canvas.js';
import { ballsCount } from './score.js';
import { Ball } from './shapes.js';
import { random, randomRGB } from './utils.js';

const balls = []

while (balls.length < ballsCount) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}


export { balls };
