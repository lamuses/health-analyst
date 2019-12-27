import { Ar } from 'veho'
import { Zu } from 'borel'
import { Gender } from '../src/assets/enums/Gender'
import { deco } from 'xbrief'
import { HealthAnalyst } from '../src/service/HealthAnalyst'

it('bmi perc test', () => {
  const ages = Ar.ini(10, () => Zu.rand(20, 60)).sort()
  const gender = Gender.Male
  const height = 174
  const weight = 61
  ages.map(age => [age, HealthAnalyst.build({ height, weight, age, gender }).bmiPercentile]) |> deco |> console.log
})
