import { API_KEY } from '../config/index.js'

export const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`
export const initUrlPoster = 'https://image.tmdb.org/t/p/w1280'
