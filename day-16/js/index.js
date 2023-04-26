const bigBottle = document.querySelector('.app__bottle')
const bottlesContainer = document.querySelector('.bottles__container')
const fragment = document.createDocumentFragment()
const liters = Array(8).fill(250)
const bottleMiniLiters = 12.5

window.addEventListener('load', () => {
  showBottles()
  increaseWater()
})

function showBottles () {
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

function increaseWater () {
  const allMiniBottles = document.querySelectorAll('.bottles__mini')
  allMiniBottles.forEach(bottle => {
    bottle.addEventListener('click', () => {
      const dataLiter = Number(bottle.getAttribute('data-liters'))
      activeBottleSelected(allMiniBottles, dataLiter)
      bigBottle.firstElementChild.style.height = `${100 - dataLiter}%`

      if (bottle.classList.contains('active')) {
        // bigBottle.firstElementChild.style.height = `${100 + dataLiter}%`
        activeBottleSelected(allMiniBottles, dataLiter)
      }

      // bottle.classList.toggle('active')
    })
  })
}

function activeBottleSelected (allMiniBottles, dataLiter) {
  allMiniBottles.forEach(bottle => {
    const liter = bottle.getAttribute('data-liters')
    const condition = liter <= dataLiter

    bottle.classList.toggle('active', condition)
  })
}
