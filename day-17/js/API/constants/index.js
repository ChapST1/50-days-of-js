import { API_KEY } from '../config/index.js'

export const API_URL = 'https://api.themoviedb.org/3'
export const POPULAR_MOVIES_API_URL = `${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
export const SEARCH_API_URL = `${API_URL}/search/movie?api_key=${API_KEY}&query="`
export const GET_MOVIE_API_URL = `${API_URL}/movie/`

export const initUrlPoster = 'https://image.tmdb.org/t/p/w1280'
