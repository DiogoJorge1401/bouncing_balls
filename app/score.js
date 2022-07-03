import { decrementBallsQuantity, getBallsQuantity } from './balls.js'
import { randomRGB } from './utils.js'

export const { decrementScore, checkIfWon, drawScore } = (() => {
  const title = document.querySelector('#score')
  setInterval(() => title.style.textShadow = `0 0 2px ${randomRGB()}`, 1000)

  const drawScore = () => {
    title.textContent = `Ball count: ${getBallsQuantity()}`
  }

  const checkIfWon = () => getBallsQuantity() === 0

  drawScore()

  return {
    decrementScore() {
      decrementBallsQuantity()
      drawScore()
    },
    checkIfWon,
    drawScore
  }
})()
