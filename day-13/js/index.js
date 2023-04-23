const areaElement = document.getElementById('area')
const choicesContainer = document.querySelector('.choices-container')
// const fragment = document.createDocumentFragment()
const choiceInput = document.querySelector('.choice__input')

areaElement.addEventListener('keyup', (event) => {
  if (event.target.value.startsWith(',')) return

  const value = event.target.value
  choiceInput.classList.add('choice__input-active')
  choiceInput.textContent = value

  if (event.key === 'Enter') {
    createChoice(value)
    clearChoiceInput()
  }

  if (event.target.value.includes(',')) {
    createChoice(value)

    // const indexCome = value.indexOf(',')
    // const newValue = value.slice(indexCome + 1)
    event.target.value = ''
  }
})

function createChoice (value) {
  const div = document.createElement('div')
  div.classList.add('choice')
  div.textContent = value

  choicesContainer.appendChild(div)
}

function clearChoiceInput () {
  choiceInput.textContent = ''
  choiceInput.classList.remove('choice__input-active')
}

function selectRandomChoice (allChoices) {
  const length = allChoices.length - 1
  const time = Math.floor(Math.random() * (length * 100))
  const interval = setInterval(() => {
    allChoices.forEach(choice => {
      const time = 500
      choice.classList.add('choice-active')
      const subInterval = setInterval(() => {
        choice.classList.remove('choice-active')
      }, time)
    })
  }, time)

  setTimeout(() => {
    clearInterval(interval)
  }, time)
}
