import { API_KEY } from '../config/index.js'

// ---------------------------------- Peticiones al servidor -> API ----------------------------------------

export async function getMovies (url = '', page = 1) {
  const response = await fetch(`${url}&page=${page}`)
  const data = await response.json()

  return data
}

export async function useFetch (url) {
  const response = await fetch(`${url}?api_key=${API_KEY}&language=en-US`)
  const data = await response.json()

  return data
}
