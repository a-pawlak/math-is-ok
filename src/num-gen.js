import * as config from './config.js'

export function numberGenerator(slide, level) {
const {min, max} = level === 0 ? config.LEVEL_0 : config.LEVEL_1
const corrector = level === 0 ? 0 : 37
if (slide === 0) {
  const num1 = getRandomNumber(min, max + corrector);
  const num2 = getRandomNumber(min, max + corrector);
  return [num1, num2, num1 + num2]
}
if (slide === 1) {
  const num1 = getRandomNumber(min, max + corrector);
  const num2 = getRandomNumber(min, max + corrector);
  return [num1 + num2, num1, num2]
}
if (slide === 2) {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  return [num1, num2, num1 * num2]
}
if (slide === 3) {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  return [num1 * num2, num1, num2]
}
}

function getRandomNumber(min, max){
  min === 0 ? max++ : max
  return Math.floor((Math.random() * max) + min)
}

