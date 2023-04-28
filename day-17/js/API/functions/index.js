import { API_KEY } from '../config/index.js'
import { GET_MOVIE_API_URL } from '../constants/index.js'

export async function getMovies (url = '', page = 1) {
  const response = await fetch(`${url}&page=${page}`)
  const data = await response.json()

  return data
}

export async function useFetch (url) {
  // /videos?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US
  const response = await fetch(`${url}?api_key=${API_KEY}&language=en-US`)
  const data = await response.json()

  return data
}
// {GET_MOVIE_API_URL}${id
