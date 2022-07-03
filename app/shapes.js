import { ctx, height, width } from './canvas.js'
import { checkIfWon, decrementScore } from './score.js';
import { intervalTime } from './time.js';
import { random, randomRGB } from './utils.js';

class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }

}

export class Ball extends Shape {
  constructor(x, y, velX, velY, color, size, ctx) {
    super(x, y, velX, velY)
    this.color = color;
    this.size = size;
    this.exists = true
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    return this
  }

  update() {
    if ((this.x + this.size) >= width)
      this.velX = -(this.velX);

    if ((this.x - this.size) <= 0)
      this.velX = -(this.velX);

    if ((this.y + this.size) >= height)
      this.velY = -(this.velY);

    if ((this.y - this.size) <= 0)
      this.velY = -(this.velY);

    this.x += this.velX;
    this.y += this.velY;

    return this
  }

  collisionDetect(balls) {
    for (const ball of balls)
      if (!(this === ball) && this.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size)
          ball.color = this.color = randomRGB();
      }
    return this
  }

}

export class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20)
    this.color = 'white'
    this.size = 10

    this.move()
  }

  move() {
    window.addEventListener('keydown', (e) => {
      console.log(e.key)
      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
          this.x -= this.velX;
          break
        case 'ArrowRight':
        case 'd':
          this.x += this.velX;
          break
        case 'ArrowUp':
        case 'w':
          this.y -= this.velY
          break
        case 'ArrowDown':
        case 's':
          this.y += this.velY
      }
    })
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();

    return this
  }

  checkBounds() {
    if ((this.x + this.size) >= width)
      this.x -= this.size;

    if ((this.x - this.size) <= 0)
      this.x += this.size;

    if ((this.y + this.size) >= height)
      this.y -= this.size;

    if ((this.y - this.size) <= 0)
      this.y += this.size;

    return this
  }

  collisionDetect(balls) {
    for (const ball of balls)
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false
          decrementScore()

          if(checkIfWon()){
            clearInterval(intervalTime)
            alert('Parabens você ganhou!!')
          }
          
        }

      }
    return this
  }
}
