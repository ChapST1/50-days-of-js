import { moviesContainer, fragment, form, pathValues } from '../constants/index.js'
import { getMovies } from '../API/functions/index.js'
import { initUrlPoster, ALL_MOVIES_API_URL, SEARCH_API } from '../API/constants/index.js'

// buscar pelicula
export async function searchMovie (keyword, page) {
  const { results } = await getMovies(`${SEARCH_API}${keyword}`, page)
  cleanMovies()
  showMovies(results)
}

// limpiar el contenedor de las peliculas
export function cleanMovies () {
  moviesContainer.innerHTML = ''
}

// mostrar las peliculas al usuario
export async function showMovies (arr) {
  arr.map((movie) => {
    const element = document.createElement('div')
    element.setAttribute('id', movie.id)
    element.classList.add('movie__item')
    element.innerHTML = `
          <img src="${initUrlPoster}${movie.poster_path}" alt="" class="movie__poster" loading="lazy" />    
          `
    return fragment.append(element)
  })

  moviesContainer.appendChild(fragment)
}

export async function loadMoreMovies (url, page) {
  const { results } = await getMovies(url, page)
  showMovies(results)
}

export async function goHome () {
  changeRoute(pathValues.default)
  resetInputSearch()
  cleanMovies()
  const { results } = await getMovies(ALL_MOVIES_API_URL, 1)
  showMovies(results)
}

function resetInputSearch () {
  (form.firstElementChild).value = ''
}

export function changeRoute (route) {
  const state = { page: 1, pageId: 2 }
  const title = ''
  const newUrl = route

  window.history.pushState(state, title, newUrl)
}

export function saveKeywordToLocalStorage (keyword) {
  window.localStorage.setItem('keyword', keyword)
}
export function getKeywordToLocalStorage () {
  return window.localStorage.getItem('keyword')
}
