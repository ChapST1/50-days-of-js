const menu = document.querySelector('.menu')
const navigation = document.querySelector('.navigation')

menu.addEventListener('click', () => {
  menu.classList.toggle('menu-active')
  navigation.classList.toggle('navigation-active')
})
