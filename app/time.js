import { randomRGB } from './utils.js'

let initialTime = 1

const title = document.querySelector('#time')

setInterval(() => title.style.textShadow = `0 0 2px ${randomRGB()}`, 1000)

const drawScore = () => {
  title.textContent = `Timer: ${initialTime}`
  initialTime++;
}

export const intervalTime = setInterval(drawScore, 1000)

