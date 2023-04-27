import { API_URL, SEARCH_API, initUrlPoster } from './API/constants/index.js'
import { getMovies } from './API/functions/index.js'
import { showMovies, cleanMovies, cargarMasMovies } from './functions/index.js'
import { form, btnMore } from './constants/index.js'

let page = 1

window.addEventListener('load', async () => {
  const { results } = await getMovies(API_URL, 1)
  showMovies(results)
})

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  page = 1
  const data = new FormData(event.target)
  const keyword = data.get('search')
  const { results } = await getMovies(`${SEARCH_API}${keyword}`, page)
  cleanMovies()
  showMovies(results)
})

btnMore.addEventListener('click', async () => {
  page++
  cargarMasMovies(API_URL, page)
})
