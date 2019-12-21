import { Gender } from '../../assets/enums/Gender'

export const genderParse = gender => {
  switch (String(gender[0]).toLowerCase()) {
    case 'f':
      return Gender.Female
    case 'm':
      return Gender.Male
    default:
      throw new Error('Don\'t you know your gender?! Re-enter!')
  }
}
