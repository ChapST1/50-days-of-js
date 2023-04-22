import { data, questionContainer, fragment } from '../constants/index.js'
export function showQuestions () {
  data.map((question) => {
    const div = document.createElement('div')
    div.classList.add('question__item')
    div.setAttribute('id', question.id)
    div.innerHTML = `
        <h3 class="item__question">${question.question}</h3>
        <p class="item__replay">${question.replay}</p>
        <aside class="item__btn"><i class="fas fa-chevron-down"></i></aside>
      `
    return fragment.appendChild(div)
  })
  questionContainer.appendChild(fragment)
}

export function expandCard () {
  const allButtons = document.querySelectorAll('.item__btn')

  allButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const previousSibling = btn.previousElementSibling
      const icon = btn.firstElementChild

      if (previousSibling.clientHeight > 0) {
        previousSibling.style.height = '0px'
        changeIcon(icon, 'fa-chevron-down')
        return
      }

      const previousSiblingHeight = previousSibling.scrollHeight
      previousSibling.style.height = `${previousSiblingHeight}px`
      changeIcon(icon, 'fa-times')
    })
  })
}

export function changeIcon (icon, newIcon) {
  icon.classList = `fas ${newIcon}`
}
