import { calculateBmi } from './src/calculateBmi'
import { evaluateBmi } from './src/evaluateBmi'
import { queryBmi } from './src/queryBmi'

export class BMI {
  /**
   * @type {number}
   */
  #weight
  /**
   * @type {number}
   */
  #height
  /**
   * @type {number}
   */
  #bmi

  constructor (weight, height) {
    this.#weight = weight
    this.#height = height
    this.updateBmi()
  }

  /**
   *
   * @param {number} weight
   * @param {number} height
   * @returns {BMI}
   */
  static build (weight, height) {
    return new BMI(weight, height)
  }

  set weight (value) {
    this.#weight = value
    this.updateBmi()
  }

  set height (value) {
    this.#height = value
    this.updateBmi()
  }

  updateBmi () {
    this.#bmi = calculateBmi(this.#weight, this.#height)
    return this.#bmi
  }

  get value () {
    return this.#bmi
  }

  get objective () {
    return queryBmi(this.#bmi)
  }

  get weightObjective () {
    const { short: shortBmi, long: longBmi } = this.objective
    return {
      short: shortBmi * (this.#height / 100) ** 2,
      long: longBmi * (this.#height / 100) ** 2,
    }
  }

  /**
   *
   * @returns {string}
   */
  get evaluate () {
    return evaluateBmi(this.#bmi)
  }

  toString () {
    return this.#bmi.toFixed(1)
  }
}
