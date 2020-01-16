import { BMI } from '../bmi/bmi'
import { BodyFat } from '../bodyFat/bodyFat'
import { queryBmiPercentile } from '../bmi/src/queryBmi'
import { Scope } from '../assets/enums/Scope'

export class HealthAnalyst {
  /** @type {BMI} */
  #bmi
  /** @type {BodyFat} */
  #bodyFat
  /** @type {number} */
  height
  /** @type {number} */
  weight
  /** @type {number} */
  age
  /** @type {number} */
  gender

  /**
   *
   * @param {number} height
   * @param {number} weight
   * @param {number} age
   * @param {number} gender
   */
  constructor (height, weight, age, gender) {
    this.height = height
    this.weight = weight
    this.age = age
    this.gender = gender
    this.#bmi = BMI.build(this.weight, this.height)
    this.#bodyFat = BodyFat.build(this.#bmi.value, this.age, this.gender)
  }

  /**
   *
   * @param {number} height
   * @param {number} weight
   * @param {number} age
   * @param {number} gender
   * @returns {HealthAnalyst}
   */
  static build ({ height, weight, age, gender }) {
    return new HealthAnalyst(height, weight, age, gender)
  }

  /**
   *
   * @returns {{bodyFat: number, bmiPercentile: number, gender: number, weight: number, age: number, height: number, bmi: number}}
   */
  get toJson () {
    const { height, weight, age, gender, bmiPercentile } = this
    return {
      height, weight, age, gender,
      bmi: this.#bmi.value,
      bodyFat: this.#bodyFat.value,
      bmiPercentile
    }
  }

  /**
   *
   * @param {symbol} [scope]
   * @returns {string|{bodyFat: string|number, weight: string|number, bmi: string|number}|*}
   */
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

  /**
   *
   * @param {symbol} [scope]
   * @returns {{short: number, long: number}|{bodyFat: {short: *, long: *}, weight: {short: *, long: *}, bmi: {short: *, long: *}}}
   */
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

  /**
   *
   * @param {symbol} [scope]
   * @returns {string|{bodyFat: string, weight: string, bmi: string}}
   */
  evaluate (scope) {
    switch (scope) {
      case Scope.BMI:
        return this.#bmi.evaluate
      case Scope.BodyFat:
        return 'notice: evaluation of body-fat is under development.'
      case Scope.Weight:
        return 'notice: evaluation of weight is under development.'
      default:
        return {
          bmi: this.#bmi.evaluate,
          bodyFat: 'notice: evaluation of body-fat is under development.',
          weight: 'notice: evaluation of weight is under development.'
        }
    }
  }

  /**
   *
   * @param {symbol} [scope]
   * @returns {string|{bodyFat: string, weight: string, bmi: string}}
   */
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

  /**
   *
   * @returns {number}
   */
  get bmiPercentile () {
    return queryBmiPercentile(this.#bmi.value, this.age, this.gender)
  }
}
