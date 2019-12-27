import { BMI } from '../bmi/bmi'
import { BodyFat } from '../bodyFat/bodyFat'
import { queryBmiPercentile } from '../bmi/src/queryBmi'
import { Scope } from '../assets/enums/Scope'

export class HealthAnalyst {
  /**
   * @type {BMI}
   */
  #bmi
  /**
   * @type {BodyFat}
   */
  #bodyFat

  constructor (height, weight, age, gender) {
    this.height = height
    this.weight = weight
    this.age = age
    this.gender = gender
    this.#bmi = BMI.build(this.weight, this.height)
    this.#bodyFat = BodyFat.build(this.#bmi.value, this.age, this.gender)
  }

  static build ({ height, weight, age, gender }) {
    return new HealthAnalyst(height, weight, age, gender)
  }

  get toJson () {
    const { height, weight, age, gender, bmiPercentile } = this
    return {
      height, weight, age, gender,
      bmi: this.#bmi.value,
      bodyFat: this.#bodyFat.value,
      bmiPercentile
    }
  }

  status (scope) {
    switch (scope) {
      case Scope.BMI:
        return this.#bmi.toString()
      case Scope.BodyFat:
        return this.#bodyFat.toString()
      case Scope.Weight:
        return this.weight
      default:
        return {
          bmi: this.#bmi.toString(),
          bodyFat: this.#bodyFat.toString(),
          weight: this.weight
        }
    }
  }

  objective (scope) {
    switch (scope) {
      case Scope.BMI:
        return this.#bmi.objective
      case Scope.BodyFat:
        return this.#bodyFat.objective
      case Scope.Weight:
        return this.#bmi.weightObjective
      default:
        return {
          bmi: this.#bmi.objective,
          bodyFat: this.#bodyFat.objective,
          weight: this.#bmi.weightObjective
        }
    }
  }

  suggest (scope) {
    switch (scope) {
      case Scope.BMI:
        const { short: shortBmi, long: longBmi } = this.#bmi.objective
        return `Your short bmi object is ${shortBmi.toFixed(
          1)}, and long bmi object is ${longBmi.toFixed(1)}.`
      case Scope.BodyFat:
        const { short: shortBFat, long: longBFat } = this.#bodyFat.objective
        return `Your short body-fat object is ${shortBFat.toFixed(
          1)}, and long body-fat object is ${longBFat.toFixed(1)}`
      case Scope.Weight:
        const { short, long } = this.#bmi.weightObjective
        return `Your short weight object is ${short.toFixed(
          1)}, and long weight object is ${long.toFixed(1)}.`
      default:
        return {
          bmi: this.suggest(Scope.BMI),
          bodyFat: this.suggest(Scope.BodyFat),
          weight: this.suggest(Scope.Weight)
        }
    }
  }

  get bmiPercentile () {
    return queryBmiPercentile(this.#bmi.value, this.age, this.gender)
  }
}
