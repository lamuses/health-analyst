import gaussian from 'gaussian'
import { bmiTable } from '../assets/bmiTable'
import { Gender } from '../../assets/enums/Gender'
import { bmiAvgMale } from '../assets/bmiAvgMale'
import { bmiAvgFemale } from '../assets/bmiAvgFemale'

/**
 * @example `Your short term object is ${short}, and long term object is ${long}.`
 * @param {number} bmi
 * @returns {{short: number, long: number}}
 */
export const queryBmi = bmi => {
  if (bmi <= 18.5) {
    return { short: 18.5, long: 18.5 }
  } else if (bmi <= 23) {
    return { short: bmi, long: bmi }
  } else {
    return bmiTable[(~~bmi).toFixed(0)] || { short: 40, long: 29.9 }
  }
}

const ageGroup = age => ~~(age / 5) * 5

/**
 *
 * @param {number} age
 * @param {number} gender
 * @returns {number}
 */
export const queryBmiStat = (age, gender) => {
  switch (gender) {
    case Gender.Male:
      return bmiAvgMale[age |> ageGroup]
    case Gender.Female:
    default:
      return bmiAvgFemale[age |> ageGroup]
  }
}

/**
 *
 * @param {number} bmi
 * @param {number} age
 * @param {number} gender
 * @returns {number}
 */
export const queryBmiPercentile = (bmi, age, gender) => {
  const { avg, dev } = queryBmiStat(age, gender)
  const dist = gaussian(avg, dev)
  return 1 - dist.cdf(bmi)
}
