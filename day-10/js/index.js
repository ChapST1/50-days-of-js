import { jokeBtn } from './constants/index.js'
import { getData } from './API/index.js'
import { showJoke } from './functions/index.js'

window.addEventListener('load', () => {
  getData()
  showJoke()
})

jokeBtn.addEventListener('click', () => {
  showJoke()
})
