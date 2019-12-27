import { HealthAnalyst } from '../src'
import { Gender } from '../src/assets/enums/Gender'
import { deco } from 'xbrief'

const briefReport = ({ height, weight, age, gender }) => {
  const healthAnalyst = HealthAnalyst.build({ height, weight, age, gender })
  return {
    status: healthAnalyst.status(),
    objective: healthAnalyst.objective(),
    suggest: healthAnalyst.suggest(),
    bmiPercentile: healthAnalyst.bmiPercentile
  }
}

const samples = [
  { height: 174, weight: 62, age: 30, gender: Gender.Male },
  { height: 168, weight: 46, age: 30, gender: Gender.Female },
]
describe('healthAnalyst test', () => {
  for (let sample of samples) {
    const title = sample |> deco
    it(title, () => {
      briefReport(sample) |> (_ => deco(_, { vu: 2 })) |> console.log
    })
  }
})
