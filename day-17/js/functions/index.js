import { moviesContainer, fragment } from '../constants/index.js'
import { getMovies } from '../API/functions/index.js'
import { initUrlPoster } from '../API/constants/index.js'

export function cleanMovies () {
  moviesContainer.innerHTML = ''
}
export async function showMovies (arr) {
  arr.map((movie) => {
    const element = document.createElement('div')
    element.classList.add('movie__item')
    element.innerHTML = `
          <img src="${initUrlPoster}${movie.poster_path}" alt="" class="movie__poster" loading="lazy" />    
          `
    return fragment.append(element)
  })

  moviesContainer.appendChild(fragment)
}

export async function cargarMasMovies (url, page) {
  const { results } = await getMovies(url, page)
  showMovies(results)
}
