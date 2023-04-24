import { choiceContainer, textArea } from './constants/index.js'
import { selectRandomChoice, createChoice } from './functions/index.js'

textArea.addEventListener('keyup', (event) => {
  if (event.target.value.startsWith(',') || event.target.value.trim() === '') return

  if (event.key === 'Enter') {
    event.target.value = ''
    selectRandomChoice()
    return
  }

  const value = (event.target.value).split(',')
  choiceContainer.innerHTML = ''

  value.forEach(choiceValue => {
    if (choiceValue.startsWith(',') || choiceValue.trim() === '') return
    createChoice(choiceValue)
  })
})
