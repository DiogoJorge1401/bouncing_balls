import './time.js'
import { random, randomRGB } from './utils.js';
import { Ball, EvilCircle } from './shapes.js';
import { ctx, height, width } from './canvas.js';
import { balls, setBalls } from './balls.js'

setBalls()

const evilCircleSize = random(10, 20);

const evilCircle = new EvilCircle(
  random(0 + evilCircleSize, width - evilCircleSize),
  random(0 + evilCircleSize, height - evilCircleSize)
)

export function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';

  ctx.fillRect(0, 0, width, height);

  renderBalls();

  evilCircle.draw()
    .checkBounds()
    .collisionDetect(balls)

  requestAnimationFrame(loop);
}

function renderBalls() {
  for (const ball of balls)
    if (ball.exists)
      ball.draw()
        .update()
        .collisionDetect(balls)
}
