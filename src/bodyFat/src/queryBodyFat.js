import { Gender } from '../../assets/enums/Gender'
import { bodyFatFemale } from '../assets/bodyFatFemale'

export const queryBodyFat = (bodyFat, gender) => {
  switch (gender) {
    case Gender.Female:
      switch (true) {
        case bodyFat <= 14:
          return { short: 14, long: 14 }
        case bodyFat < 25:
          return { short: bodyFat, long: bodyFat }
        case bodyFat >= 50:
          return { short: 48, long: 31.9 }
        default:
          return bodyFatFemale[(~~bodyFat).toFixed(0)] ||
            { short: 48, long: 31.9 }
      }
    case Gender.Male:
    default:
      switch (true) {
        case bodyFat <= 6:
          return { short: 6, long: 6 }
        case bodyFat < 18:
          return { short: bodyFat, long: bodyFat }
        case bodyFat >= 42:
          return { short: 40, long: 24.9 }
        default:
          return bodyFatFemale[(~~bodyFat).toFixed(0)] ||
            { short: 40, long: 24.9 }
      }
  }
}
