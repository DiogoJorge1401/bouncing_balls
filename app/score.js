import { randomRGB } from './utils.js'

export const { decrementScore, checkIfWon, ballsCount } = (() => {
  let initialScore = 25

  const title = document.querySelector('#score')
  setInterval(() => title.style.textShadow = `0 0 4px ${randomRGB()}`, 1000)

  const drawScore = () => {
    title.textContent = `Ball count: ${initialScore}`
  }

  const checkIfWon = () => initialScore === 0

  drawScore()

  return {
    decrementScore() {
      initialScore--
      drawScore()
    },
    checkIfWon,
    ballsCount: initialScore
  }
})()
