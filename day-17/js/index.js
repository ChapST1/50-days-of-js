import { ALL_MOVIES_API_URL, API_URL, GET_MOVIE_API_URL, SEARCH_API, initUrlPoster } from './API/constants/index.js'
import { useFetch, getMovies } from './API/functions/index.js'
import { showMovies, loadMoreMovies, goHome, changeRoute, searchMovie, getKeywordToLocalStorage, saveKeywordToLocalStorage, showMovieVideoInModal, showDataInModal, mutationObserver } from './functions/index.js'
import { modal, form, btnMore, goBackButton, moviesContainer, pathValues } from './constants/index.js'

let page = 1

window.addEventListener('load', async () => {
  mutationObserver()
  const { results } = await getMovies(ALL_MOVIES_API_URL, 1)
  console.log(results)
  showMovies(results)
})

form.addEventListener('submit', async (event) => {
  mutationObserver()
  event.preventDefault()
  page = 1
  const data = new FormData(event.target)
  const keyword = data.get('search')
  const route = `/search/${keyword}`
  saveKeywordToLocalStorage(keyword)
  changeRoute(route)
  searchMovie(keyword, page)
})

btnMore.addEventListener('click', async () => {
  const { pathname } = window.location

  if (pathname === pathValues.default) {
    page++
    loadMoreMovies(ALL_MOVIES_API_URL, page)
  }

  if (pathname.includes(pathValues.search)) {
    page++
    const currentKeyword = getKeywordToLocalStorage()
    const url = `${SEARCH_API}${currentKeyword}`
    loadMoreMovies(url, page)
  }
})

document.querySelector('.full-screen').addEventListener('click', () => {
  document.documentElement.requestFullscreen()
})

goBackButton.addEventListener('click', () => {
  goHome()
})

modal.addEventListener('click', () => {
  modal.classList.remove('modal-active')
  document.documentElement.style.overflowY = 'scroll'
})

function modalVideo () {

}
