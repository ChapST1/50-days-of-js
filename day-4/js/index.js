const searchBtn = document.querySelector('.form__btn')

searchBtn.addEventListener('click', (event) => {
  const inputSearchElement = event.target.previousElementSibling
  inputSearchElement.classList.toggle('form__input--active')
})
