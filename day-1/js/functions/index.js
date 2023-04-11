import { app, posters, fragment } from '../constants/index.js'

// Functions
export function showImages () {
  posters.map((item) => {
    const div = document.createElement('div')
    div.classList.add('poster-item')
    div.innerHTML = `<img class="poster-img" src="${item.image}" alt=""> <h2 class="poster-name">${item.title}</h2>`
    return fragment.appendChild(div)
  })
  app.appendChild(fragment)
}

export function expandImage () {
  const images = document.querySelectorAll('.poster-img')

  images.forEach((img) => {
    img.addEventListener('click', () => {
      closeImages(images)
      img.parentElement.classList.add('expand')
    })
  })
}

export function expandFirstImage () {
  const images = document.querySelectorAll('.poster-img')
  images[0].parentElement.classList.add('expand')
}

function closeImages (images) {
  images.forEach((img) => {
    img.parentElement.classList.remove('expand')
  })
}
