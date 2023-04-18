const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')

inputEmail.addEventListener('focus', (event) => { addClass(event, true) })
inputPassword.addEventListener('focus', (event) => { addClass(event, true) })

inputEmail.addEventListener('blur', (event) => { addClass(event, false) })
inputPassword.addEventListener('blur', (event) => { addClass(event, false) })

function addClass (event, isAddClass) {
  const currentInput = event.target
  const label = currentInput.parentElement
  const spansContainer = currentInput.previousElementSibling
  const spansElement = spansContainer.childNodes

  if (currentInput.value !== '') return

  label.classList.toggle('form__label-active', isAddClass)

  spansElement.forEach(span => {
    if (span.nodeName === '#text') return
    span.classList.toggle('active', isAddClass)
  })
}
