export const calculateBodyFat = (bmi, age, gender) => {
  return (1.45 * bmi) + (0.11 * age) - (10.4 * gender) - 5.9
}
