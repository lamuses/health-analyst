import { calculateBodyFat } from './src/calculateBodyFat'
import { queryBodyFat } from './src/queryBodyFat'

export class BodyFat {
  /**
   * @type {number}
   */
  #age
  /**
   * @type {string}
   */
  #gender
  /**
   * @type {number}
   */
  #bmi
  /**
   * @type {number}
   */
  #bodyFat

  /**
   *
   * @param {number} bmi
   * @param {number} age
   * @param {string} gender
   */
  constructor (bmi, age, gender) {
    this.#age = age
    this.#gender = gender
    this.#bmi = bmi
    this.#bodyFat = this.#updateBodyFat()
  }

  static build (bmi, age, gender) {
    return new BodyFat(bmi, age, gender)
  }

  set bmi (value) {
    this.#bmi = value
    this.#updateBodyFat()
  }

  set age (value) {
    this.#age = value
    this.#updateBodyFat()
  }

  set gender (value) {
    this.#gender = value
    this.#updateBodyFat()
  }

  #updateBodyFat () {
    this.#bodyFat = calculateBodyFat(this.#bmi, this.#age, this.#gender)
    return this.#bodyFat
  }

  get value () {
    return this.#bodyFat
  }

  get objective () {
    return queryBodyFat(this.#bodyFat)
  }

  toString () {
    return `${this.#bodyFat.toFixed(2)}%`
  }
}
