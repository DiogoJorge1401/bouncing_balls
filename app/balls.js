import { height, width } from './canvas.js';
import { drawScore } from './score.js';
import { Ball } from './shapes.js';
import { random, randomRGB } from './utils.js';

export const { balls, setBalls, decrementBallsQuantity, getBallsQuantity } = (() => {
  let ballsCount = 0
  const title = document.querySelector('#score')
  const balls = []

  const setBalls = () => {
    let qntBalls = prompt('How many balls do you want to play with?')

    while (isNaN(qntBalls) || !qntBalls || qntBalls == 0)
      qntBalls = prompt('How many balls do you want to play with?')

    ballsCount = +qntBalls
    drawScore()
    generateBalls()
  }

  const generateBalls = () => {
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

  }

  const decrementBallsQuantity = () => {
    ballsCount--;
  }

  const getBallsQuantity = () => ballsCount


  return { balls, setBalls, decrementBallsQuantity, getBallsQuantity }
})()
