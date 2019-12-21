import { bmiTable } from '../assets/bmiTable'

export const queryBmi = bmi => {
  if (bmi <= 18.5) {
    return { short: 18.5, long: 18.5 }
  } else if (bmi <= 23) {
    return { short: bmi, long: bmi }
  } else {
    return bmiTable[(~~bmi).toFixed(0)] || { short: 40, long: 29.9 }
  }
  // return `\r\nYour short term object is ${short}, \r\nand long term object is ${long}.`
}
