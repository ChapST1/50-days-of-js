import { SOUNDS_NAME, SOUNDS_AUDIO, fragment, app } from '../constants/index.js'

export function showSounds () {
  SOUNDS_NAME.map((sound) => {
    const div = document.createElement('div')
    div.classList.add('sound-container')
    div.textContent = sound

    return fragment.appendChild(div)
  })
  app.appendChild(fragment)
}

export function tapButton () {
  const allButtons = document.querySelectorAll('.sound-container')

  allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      stopAudios(button.textContent)
      const soundName = button.textContent
      SOUNDS_AUDIO[soundName].play()
    })
  })
}

function stopAudios (currentName) {
  SOUNDS_NAME.forEach((name) => {
    if (name === currentName) return
    SOUNDS_AUDIO[name].load()
  })
}
