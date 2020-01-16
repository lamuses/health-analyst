import { Gender } from '../src/assets/enums/Gender'
import { HealthAnalyst } from '../src'
import { deco, Xr } from 'xbrief'
import { GP } from 'elprimero'

const analyse = ({ height, weight, age, gender }) => {
  const healthAnalyst = HealthAnalyst.build({ height, weight, age, gender })
  healthAnalyst.status() |> (_ => deco(_, { vu: 3 })) |> console.log
  healthAnalyst.objective() |> (_ => deco(_, { vu: 1 })) |> console.log
  healthAnalyst.evaluate() |> (_ => deco(_, { vu: 1 })) |> console.log
  healthAnalyst.suggest() |> (_ => deco(_, { vu: 3 })) |> console.log
}
const samples = {
  slim_boy: { height: 174, weight: 62, age: 30, gender: Gender.Male },
  slim_girl: { height: 168, weight: 46, age: 30, gender: Gender.Female }
}
describe('Health analyzer test', () => {
    for (let [name, profile] of Object.entries(samples)) {
      it(`Analyse ${name}: ${profile |> JSON.stringify}`, () => {
        Xr(GP.now()).tag(name, profile |> deco).say |> console.log
        profile |> analyse
      })
    }
  }
)
