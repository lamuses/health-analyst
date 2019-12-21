import { BMI } from './bmi/index'
import { BodyFat } from './bodyFat/index'

class ObjectiveManager {
  static suggestBmi (bmi) {
    const { short: shortBmi, long: longBmi } = bmi.aims
    return `Your short bmi object is ${shortBmi.toFixed(
      1)}, and long bmi object is ${longBmi.toFixed(1)}.`
  }

  static suggestBodyFat (bodyFat) {
    const { short: shortBFat, long: longBFat } = bodyFat.aims
    return `Your short bodyfat object is ${shortBFat.toFixed(
      1)}, and long bodyfat object is ${longBFat.toFixed(1)}`
  }

  static suggestWeight (bmi) {
    const { short, long } = bmi.weightAims
    return `Your short weight object is ${short.toFixed(
      1)}, and long weight object is ${long.toFixed(1)}.`
  }
}

export {
  BMI,
  BodyFat,
  ObjectiveManager,
}
