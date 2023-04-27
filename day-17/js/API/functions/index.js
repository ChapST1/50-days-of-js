import { API_KEY } from '../config/index.js'
import { GET_MOVIE_API_URL } from '../constants/index.js'

export async function getMovies (url = '', page = 1) {
  const response = await fetch(`${url}&page=${page}`)
  const data = await response.json()

  return data
}

export async function getMovie (id) {
  const response = await fetch(`${GET_MOVIE_API_URL}${id}&language=en-US?api_key=${API_KEY}`)
  const data = await response.json()

  return data
}
