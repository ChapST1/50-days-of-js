import { allCards, data } from '../constants/index.js'

export function addFollowers () {
  allCards.forEach((card) => {
    const id = card.getAttribute('id')
    addAnimation(card, id)
  })
}

export function addAnimation (card, id) {
  const counterElement = (card.children)[1]
  let valueCounter = Number(counterElement.textContent)

  const interval = setInterval(() => {
    valueCounter++
    const iterator = Math.ceil((valueCounter) * 324)
    counterElement.textContent = (iterator)

    if (iterator >= data[id]) {
      counterElement.textContent = data[id]
      counterElement.classList.add('endNumber')
      clearInterval(interval)
    }
  }, 20)
}
