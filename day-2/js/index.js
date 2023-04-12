import { steps, buttonNext, buttonPrev } from './constants/index.js'
import { showSteps, activeFirstStep, prevStep, nextStep } from './functions/index.js'

window.addEventListener('load', () => {
  showSteps(steps)
  activeFirstStep()
})

buttonPrev.addEventListener('click', (event) => { prevStep(event) })
buttonNext.addEventListener('click', (event) => { nextStep(event) })
