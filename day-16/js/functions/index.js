import { liters, bottleMiniLiters, fragment, bottlesContainer, bigBottle } from '../constants/index.js'

// mostrar las minibotellas
export function showBottles () {
  liters.map((number, index) => {
    index++
    const element = document.createElement('div')
    const value = index * bottleMiniLiters

    element.classList.add('bottles__mini')
    element.setAttribute('data-liters', value)
    element.textContent = `
      ${number}
       ml
      `

    return fragment.append(element)
  })
  bottlesContainer.appendChild(fragment)
}

export function increaseWater () {
  const allMiniBottles = document.querySelectorAll('.bottles__mini')
  const bottleEmpty = bigBottle.firstElementChild
  const bottleWater = bigBottle.lastElementChild
  const bottleEmptyLitersNumber = bottleEmpty.firstElementChild
  const waterLitersNumber = bottleWater.firstElementChild

  allMiniBottles.forEach((bottle, index) => {
    bottle.addEventListener('click', () => {
      const dataLiter = Number(bottle.getAttribute('data-liters'))
      const value = (2000 - liters[0]) - (liters[0] * index)
      const addCeroPoint = ['0', '.', value.toString().replaceAll('0', '').slice(0, 1), value.toString().replaceAll('0', '').slice(1)].join('')
      const addPoint = [value.toString().replaceAll('0', '').slice(0, 1), '.', value.toString().replaceAll('0', '').slice(1)].join('')

      activeBottleSelected(allMiniBottles, dataLiter)
      bottleWater.style.height = `${dataLiter}%` //  bottle empty 👆
      bottleEmpty.style.height = `${100 - dataLiter}%` //  water 👆

      bottleEmptyLitersNumber.textContent = `${(value < 1000 ? addCeroPoint : addPoint)}L`
      waterLitersNumber.textContent = `${dataLiter}%`
    })
  })
}

export function activeBottleSelected (allMiniBottles, dataLiter) {
  allMiniBottles.forEach(bottle => {
    const liter = bottle.getAttribute('data-liters')
    const condition = liter <= dataLiter

    bottle.classList.toggle('active', condition)
  })
}
