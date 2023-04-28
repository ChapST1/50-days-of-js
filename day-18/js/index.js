import { btnLeft, btnRight, length } from './constants/index.js'
import { changeImage, addImage } from './functions/index.js'

let iterator = 0

window.addEventListener('load', () => {
  addImage()
})

btnRight.addEventListener('click', () => {
  iterator++
  if (iterator > length) {
    iterator = 0
  }
  changeImage(iterator)
})

btnLeft.addEventListener('click', () => {
  iterator--
  if (iterator < 0) {
    iterator = length
  }

  changeImage(iterator)
})
