// ---------------------------------- Imports ----------------------------------------

import {
  POPULAR_MOVIES_API_URL,
  SEARCH_API_URL
} from './API/constants/index.js'

import {
  getMovies
} from './API/functions/index.js'

import {
  showMovies,
  loadMoreMovies,
  goHome,
  searchMovie
} from './functions/index.js'

import {
  form,
  btnMore,
  btnFullScreen,
  goBackButton,
  pathValues
} from './constants/index.js'

import {
  mutationObserver,
  saveKeywordToLocalStorage,
  getKeywordToLocalStorage,
  enableFullScreen
} from './utils/index.js'

import { changeRoute } from './routes/index.js'

// ---------------------------------- Init code  ----------------------------------------

let page = 1

// ---------------------------------- Cuando la pgina termine de cargar  ----------------------------------------

window.addEventListener('load', async () => {
  mutationObserver()

  const { results } = await getMovies(POPULAR_MOVIES_API_URL, 1)
  showMovies(results)
})

// ---------------------------------- Al hacer la busqueda  ----------------------------------------

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  mutationObserver()
  const data = new FormData(event.target)
  const keyword = data.get('search')
  const route = `/search/${keyword}`
  page = 1

  saveKeywordToLocalStorage(keyword)
  changeRoute(route)
  searchMovie(keyword, page)
})

// ---------------------------------- Agregar mas peliculas  ----------------------------------------

btnMore.addEventListener('click', async () => {
  const { pathname } = window.location

  if (pathname === pathValues.default) {
    page++
    loadMoreMovies(POPULAR_MOVIES_API_URL, page)
  }

  if (pathname.includes(pathValues.search)) {
    page++
    const currentKeyword = getKeywordToLocalStorage()
    const url = `${SEARCH_API_URL}${currentKeyword}`

    loadMoreMovies(url, page)
  }
})

// ---------------------------------- Pantalla completa ----------------------------------------

btnFullScreen.addEventListener('click', () => enableFullScreen())

goBackButton.addEventListener('click', () => {
  goHome()
})
