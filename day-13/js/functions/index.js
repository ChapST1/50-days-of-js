import { choiceContainer, choicesRules } from '../constants/index.js'

const { active, winner } = choicesRules

export function createChoice (value) {
  const div = document.createElement('div')
  div.classList.add('choice')
  div.textContent = value
  choiceContainer.appendChild(div)
}

export function selectRandomChoice () {
  const allChoices = document.querySelectorAll('.choice')
  const length = allChoices.length
  const winnerChoice = Math.floor(Math.random() * length)

  const intervalToAdd = setInterval(() => {
    addClassToRandomChoice(allChoices, length) // toggle on/off class
  }, 200)

  setTimeout(() => {
    clearInterval(intervalToAdd)
    resetAllChoices(allChoices, winnerChoice) // class off
  }, 5000)
}

export function addClassToRandomChoice (allChoices, length) {
  const index = Math.floor((Math.random() * length))

  if (allChoices[index].classList.contains(active)) {
    allChoices[index].classList.remove(active)
    return
  }

  allChoices[index].classList.add(active)

  setTimeout(() => {
    allChoices[index].classList.remove(active)
  }, 100)
}

export function resetAllChoices (allChoices, winnerChoice) {
  allChoices.forEach((choice) => {
    choice.classList.remove(active)
  })

  addWinnerChoice(allChoices, winnerChoice)
}

export function addWinnerChoice (allChoices, winnerIndex) {
  allChoices[winnerIndex].classList.add(winner)
}
