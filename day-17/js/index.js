import { ALL_MOVIES_API_URL, SEARCH_API, initUrlPoster } from './API/constants/index.js'
import { getMovie, getMovies } from './API/functions/index.js'
import { showMovies, loadMoreMovies, goHome, changeRoute, searchMovie, getKeywordToLocalStorage, saveKeywordToLocalStorage } from './functions/index.js'
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
// TODO: AL ENTRAR A LA URL DESDE OTRA PESTANIA VERIFICAR SI TIENE EN LA RUTA SEARCH, SI ES ASI QUE BUSQUE DIRECTAMENTE LA PELICULA
function openModal (allMovies) {
  allMovies.forEach(movie => {
    movie.addEventListener('click', () => {
      document.documentElement.style.overflowY = 'hidden'
      modal.classList.add('modal-active')

      const movieId = Number(movie.getAttribute('id'))
      showDataInModal(movieId)
    })
  })
}

function mutationObserver () {
  const mutations = new window.MutationObserver((mutations) => {
    const { addedNodes } = mutations[0]
    openModal(addedNodes)
  })

  const config = { attributes: true, childList: true, characterData: true }

  mutations.observe(moviesContainer, config)
}

async function getMovieInfo (id) {
  const movie = await getMovie(id)
  return movie
}

async function showDataInModal (id) {
  const movieInfo = await getMovieInfo(id)
  console.log(movieInfo)
  modal.innerHTML = `
    <div class="modal__image image">
      <img src="${initUrlPoster}${movieInfo.poster_path}" alt="${movieInfo.original_title} poster" class="image__poster"/>
    </div>
    <div class="modal__info info">
      <h2 class="info__title">${movieInfo.original_title}</h2>
      <p class="info__paragraph">${movieInfo.overview}</p>
    </div>
    `
}
