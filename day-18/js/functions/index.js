import { slider, images } from '../constants/index.js'

export function addImage (image = images[0]) {
  document.body.style.background = `linear-gradient(#000000b4,#000000b4),url('${image}')`
  document.body.style.backgroundPosition = 'center center'
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundRepeat = 'no-repeat'

  slider.style.background = `url(${image})`
  slider.style.backgroundPosition = 'center center'
  slider.style.backgroundSize = 'cover'
}

export function changeImage (i) {
  addImage(images[i])
}
