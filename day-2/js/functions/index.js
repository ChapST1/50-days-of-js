import { stepsContainer, steps, buttonNext, buttonPrev, enableStyles, disableStyles } from '../constants/index.js'

let iterator = 0

// Mostramos en pantalla los pasos que estan el el array steps
export function showSteps (steps) {
  steps.map((step) => {
    return stepsContainer.innerHTML += `<div class="steps__step"><span>${step}</span></div>`
  })
}

//
export function nextStep (event) {
  const isFirstStep = iterator === 1
  iterator++
  const isLastStep = iterator === steps.length - 1
  const allStepsButtons = document.querySelectorAll('.steps__step')
  const currentButton = event.target

  if (!isFirstStep) {
    addStyles(buttonPrev, disableStyles)
  }

  if (isLastStep) {
    addStyles(currentButton, enableStyles)
  }

  allStepsButtons[(iterator)].classList.add('active')

  // si el iterador es mayor al la longitud del array steps (desactiva el boton otra vez)
  if (iterator > allStepsButtons.length - 1) {
    addStyles(currentButton, enableStyles)
  }
}

export function prevStep (event) {
  const currentButton = event.target
  const allStepsButtons = document.querySelectorAll('.steps__step')
  iterator--

  // si el iterador es menor al la longitud del array steps (desactiva el boton otra vez)
  if (iterator < 0) {
    iterator = 0
    addStyles(currentButton, enableStyles)
    return
  }

  if (iterator === 0) {
    addStyles(currentButton, enableStyles)
  }

  currentButton.disabled = false
  addStyles(buttonNext, disableStyles)
  allStepsButtons[iterator + 1].classList.remove('active')
}

export function activeFirstStep () {
  const allStepsButtons = document.querySelectorAll('.steps__step')

  allStepsButtons[0].classList.add('active')
  addStyles(buttonPrev, enableStyles)
}

function addStyles (element, { isToAddClass, className, isDisable, cursor }) {
  isToAddClass
    ? element.classList.add(className)
    : element.classList.remove(className)

  element.disabled = isDisable
  element.style.cursor = cursor
}
