// ---------------------------------- Cambiar la ruta de la url ----------------------------------------

// Con esta funcion cambiamos la ruta ( url ) de la pagina cuando buscamos peliculas o regresamos al inicio de la aplicacion

export function changeRoute (route) {
  const state = { page: 1, pageId: 2 }
  const title = ''
  const newUrl = route

  window.history.pushState(state, title, newUrl)
}
