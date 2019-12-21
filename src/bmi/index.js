import { calculateBmi } from './src/calculateBmi'
import { evaluateBmi } from './src/evaluateBmi'
import { queryBmi } from './src/queryBmi'

export class BMI {
  constructor (weight, height) {
    this.height = height
    this.bmi = calculateBmi(weight, height)
  }

  static build (weight, height) {
    return new BMI(weight, height)
  }

  toString () {
    return this.bmi.toFixed(1)
  }

  get value () {
    return this.bmi
  }

  get aims () {
    return queryBmi(this.bmi)
  }

  get weightAims () {
    const { short: shortBmi, long: longBmi } = this.aims
    return {
      short: shortBmi * (this.height / 100) ** 2,
      long: longBmi * (this.height / 100) ** 2,
    }
  }

  get evaluate () {
    return evaluateBmi(this.bmi)
  }
}
