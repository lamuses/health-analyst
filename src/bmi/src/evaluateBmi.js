/**
 *
 * @param {number} bmi
 * @returns {string}
 */
export const evaluateBmi = bmi =>
  bmi < 18.5
    ? 'under-weight'
    : bmi < 25
    ? 'superb fitness'
    : bmi < 30
      ? 'oops alert rings'
      : 'hello fatty'
