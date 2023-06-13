// ---------------------------------- Imports ----------------------------------------

import {
  moviesContainer,
  fragment,
  form,
  pathValues,
  modal,
  modalCloseBtn
} from '../constants/index.js'

import {
  getMovies,
  useFetch
} from '../API/functions/index.js'

import {
  POPULAR_MOVIES_API_URL,
  SEARCH_API_URL,
  GET_MOVIE_API_URL,
  initUrlPoster
} from '../API/constants/index.js'

import {
  cleanContainer
} from '../utils/index.js'

import {
  changeRoute
} from '../routes/index.js'

// ---------------------------------- Buscar pelicula ----------------------------------------

export async function searchMovie (keyword, page) {
  const { results } = await getMovies(`${SEARCH_API_URL}${keyword}`, page)
  cleanContainer(moviesContainer)
  showMovies(results)
}

// ---------------------------------- Mostrar peliculas sea en buscar o al ingresar a la aplicacion por primera vez ----------------------------------------

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

// ---------------------------------- Ir al inicio de la aplicacion ----------------------------------------

export async function goHome () {
  changeRoute(pathValues.default)
  resetInputSearch()
  cleanContainer(moviesContainer)

  const { results } = await getMovies(POPULAR_MOVIES_API_URL, 1)
  showMovies(results)
}

function resetInputSearch () {
  (form.firstElementChild).value = ''
}

// ---------------------------------- Obterner Datos ----------------------------------------

async function getMovieInfo (id) {
  const urlApi = `${GET_MOVIE_API_URL}${id}`
  const movie = await useFetch(urlApi)
  return movie
}

async function getMovieVideos (id) {
  const url = `${GET_MOVIE_API_URL}${id}/videos`
  const data = await useFetch(url)
  return data
}

// TODO: AL ENTRAR A LA URL DESDE OTRA PESTANIA VERIFICAR SI TIENE EN LA RUTA SEARCH, SI ES ASI QUE BUSQUE DIRECTAMENTE LA PELICULA
// ---------------------------------- Modal informacion de la pelicula ----------------------------------------

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
      <button class="info__button-trailer">See Trailer</button>
      <div class="info__movies movies">
        <i class="fa-regular fa-circle-xmark movies__close-modal"></i>
        <h3>Videos</h3>
        <div class="movies__container"></div>
        <div class="movies__modal modal">
          <iframe src"" class="modal__iframe"></iframe>
        </div>
      </div>
    </div>
    `
  showMovieVideoInModal(id)
  closeModal()
}

export async function showMovieVideoInModal (id) {
  const { results } = await getMovieVideos(id)

  const moviesContainer = document.querySelector('.movies__container')
  const fragment = document.createDocumentFragment()

  results.reverse().map((video) => {
    const { key, id } = video
    const element = document.createElement('div')

    element.classList.add('videos__item')
    element.setAttribute('data-key', key)
    element.setAttribute('data-id', id)

    element.innerHTML = `
      <img src="https://i.ytimg.com/vi/${key}/hqdefault.jpg" class="videos__poster" />
    `
    return fragment.append(element)
  })
  moviesContainer.appendChild(fragment)
  openModalVideo()
}

export function closeModal () {
  setTimeout(() => {
    const closeBtn = document.querySelector('.movies__close-modal')

    closeBtn.addEventListener('click', () => {
      document.documentElement.style.overflowY = 'scroll'
      modal.classList.remove('modal-active')
    })
  }, 1000)
}

// ---------------------------------- Modal videos ----------------------------------------

// cuando el usario quiere ver videos sobre x pelicula se abre la modal

function openModalVideo () {
  const allPosterVideos = document.querySelectorAll('.videos__item')
  const modal = document.querySelector('.movies__modal')
  const modalIframe = document.querySelector('.modal__iframe')

  allPosterVideos.forEach((video) => {
    video.addEventListener('click', () => {
      modal.classList.add('movies__modal-active')

      const key = video.getAttribute('data-key')
      const id = video.getAttribute('data-id')
      const urlVideo = `https://www.themoviedb.org/video/play?key=${key}&width=698&height=392&_=${id}`

      modalIframe.setAttribute('src', urlVideo)
      closeModalVideos(modal, modalIframe)
    })
  })
}

function closeModalVideos (modalElement, iframe) {
  modalElement.addEventListener('click', (event) => {
    if (modalElement === event.target) {
      modalElement.classList.remove('movies__modal-active')
      resetVideoInModalVideo(iframe)
    }
  })
}

function resetVideoInModalVideo (iframe) {
  iframe.removeAttribute('src')
}
