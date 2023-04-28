import { moviesContainer, fragment, form, pathValues, modal } from '../constants/index.js'
import { getMovies, useFetch } from '../API/functions/index.js'
import { initUrlPoster, ALL_MOVIES_API_URL, SEARCH_API, GET_MOVIE_API_URL } from '../API/constants/index.js'

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

// modal

export async function showMovieVideoInModal (id) {
  const { results } = await getMovieVideos(id)

  const moviesContainer = document.querySelector('.movies__container')
  const fragment = document.createDocumentFragment()

  results.map((video) => {
    const { key, id } = video
    const element = document.createElement('div')
    element.classList.add('videos__item')
    element.setAttribute('data-key', key)
    element.setAttribute('data-id', id)
    // const urlVideo = `https://www.themoviedb.org/video/play?key=${key}&width=698&height=392&_=${id}`

    element.innerHTML = `
      <img src="https://i.ytimg.com/vi/${video.key}/hqdefault.jpg" class="videos__poster" />
    `
    return fragment.append(element)
  })
  moviesContainer.appendChild(fragment)
  // open modal and see triller
}

async function getMovieVideos (id) {
  const url = `${GET_MOVIE_API_URL}${id}/videos`
  const data = await useFetch(url)
  return data
}

async function getMovieInfo (id) {
  const urlApi = `${GET_MOVIE_API_URL}${id}`
  const movie = await useFetch(urlApi)
  return movie
}

export async function showDataInModal (id) {
  const movieInfo = await getMovieInfo(id)
  console.log(movieInfo)
  modal.innerHTML = `
    <div class="modal__image image">
      <img src="${initUrlPoster}${movieInfo.poster_path}" alt="${movieInfo.original_title} poster" class="image__poster"/>
    </div>
    <div class="modal__info info">
      <h2 class="info__title">${movieInfo.original_title}</h2>
      <p class="info__paragraph">${movieInfo.overview}</p>
      <div class="info__movies movies">
        <h1>Videos</h1>
        <div class="movies__container"></div>
        <div class="movies__modal"></div>
      </div>
    </div>
    `
  showMovieVideoInModal(id)
}

// observer

export function mutationObserver () {
  const mutations = new window.MutationObserver((mutations) => {
    const { addedNodes } = mutations[0]
    openModal(addedNodes)
  })

  const config = { attributes: true, childList: true, characterData: true }

  mutations.observe(moviesContainer, config)
}

// TODO: AL ENTRAR A LA URL DESDE OTRA PESTANIA VERIFICAR SI TIENE EN LA RUTA SEARCH, SI ES ASI QUE BUSQUE DIRECTAMENTE LA PELICULA
export function openModal (allMovies) {
  allMovies.forEach(movie => {
    movie.addEventListener('click', () => {
      document.documentElement.style.overflowY = 'hidden'
      modal.classList.add('modal-active')

      const movieId = Number(movie.getAttribute('id'))
      showDataInModal(movieId)
    })
  })
}
