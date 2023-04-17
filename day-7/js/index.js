const playSection = document.querySelector('.playstation')
const xboxSection = document.querySelector('.xbox')

window.addEventListener('load', () => {
  isMouseEnter(playSection)
  isMouseEnter(xboxSection)
})

function isMouseEnter (element) {
  element.addEventListener('mouseenter', (e) => {
    element.classList.add('playstation-active')
  })

  element.addEventListener('mouseleave', () => {
    element.classList.remove('playstation-active')
  })
}
