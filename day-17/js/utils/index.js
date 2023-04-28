import { openModal } from '../functions/index.js'
import { moviesContainer } from '../constants/index.js'

// ---------------------------------- Observador de mutacion ----------------------------------------

// Esta funcion se encarga de observar cuando el contenedor (movies-container) tiene childs ( muta ) en su interior
// si es asi se ejecutara' la funcion openModal que permite ver mas informacion de la pelicula

export function mutationObserver () {
  const mutations = new window.MutationObserver((mutations) => {
    const { addedNodes } = mutations[0]
    openModal(addedNodes)
  })

  const config = { attributes: true, childList: true, characterData: true }

  mutations.observe(moviesContainer, config)
}

// ---------------------------------- Local storage ----------------------------------------

// guardamos la palabra cuando el usuario hace una busqueda de una pelicula en el ( Search input )

export function saveKeywordToLocalStorage (keyword) {
  window.localStorage.setItem('keyword', keyword)
}

export function getKeywordToLocalStorage () {
  return window.localStorage.getItem('keyword')
}

// ---------------------------------- Limpiar contenedores ----------------------------------------

export function cleanContainer (element) {
  element.innerHTML = ''
}
