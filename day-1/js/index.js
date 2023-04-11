import { showImages, expandImage, expandFirstImage } from './functions/index.js'

window.addEventListener('load', () => {
  showImages()
  expandImage()

  setTimeout(() => {
    expandFirstImage()
  }, 200)
})
