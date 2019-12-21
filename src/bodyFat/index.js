import { calculateBodyFat } from './src/calculateBodyFat'
import { queryBodyFat } from './src/queryBodyFat'

export class BodyFat {
  constructor (bmi, age, gender) {
    this.bodyFat = calculateBodyFat(bmi, age, gender)
  }

  static build (bmi, age, gender) {
    return new BodyFat(bmi, age, gender)
  }

  get value () {
    return this.bodyFat
  }

  toString () {
    return `${this.bodyFat.toFixed(2)}%`
  }

  get aims () {
    return queryBodyFat(this.bodyFat)
  }
}
