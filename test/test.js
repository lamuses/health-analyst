import { Gender } from '../src/assets/enums/Gender'
import { BMI } from '../src/bmi'
import { BodyFat } from '../src/bodyFat'
import { HealthAnalyst } from '../src'
import { deco } from 'xbrief'
describe('Health analyzer test', () => {
    it('Test sample: 174, 62, 30, Gender.Male', () => {
      const [height, weight, age, gender] = [
        174, 62, 30, Gender.Male,
      ]
      const bmi = BMI.build(weight, height)
      const bodyFat = BodyFat.build(bmi.value, age, gender)

      const calc = {}, suggest = {}
      calc.bmi = `${bmi} (${bmi.evaluate})`
      calc.bodyFat = `${bodyFat}`
      suggest.bmi = HealthAnalyst.suggestBmi(bmi)
      suggest.bodyFat = HealthAnalyst.suggestBodyFat(bodyFat)
      suggest.weight = HealthAnalyst.suggestWeight(bmi)
      calc |> (_ => deco(_, { vu: 3 })) |> console.log
      suggest |> (_ => deco(_, { vu: 3 })) |> console.log
    })
    it('Test sample: 168, 46, 30, Gender.Female', () => {
      const [height, weight, age, gender] = [
        168, 46, 30, Gender.Female,
      ]
      const bmi = BMI.build(weight, height)
      const bodyFat = BodyFat.build(bmi.value, age, gender)

      const calc = {}, suggest = {}
      calc.bmi = `${bmi} (${bmi.evaluate})`
      calc.bodyFat = `${bodyFat}`
      suggest.bmi = HealthAnalyst.suggestBmi(bmi)
      suggest.bodyFat = HealthAnalyst.suggestBodyFat(bodyFat)
      suggest.weight = HealthAnalyst.suggestWeight(bmi)
      calc |> (_ => deco(_, { vu: 3 })) |> console.log
      suggest |> (_ => deco(_, { vu: 3 })) |> console.log
    })
  },
)
