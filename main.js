
import { loop } from './app/app.js';
import { randomRGB } from './app/utils.js';

const title = document.querySelector('h1')
setInterval(() => title.style.textShadow = `0 0 4px ${randomRGB()}`, 1000)

loop();