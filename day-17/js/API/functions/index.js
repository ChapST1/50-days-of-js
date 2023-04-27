export async function getMovies (url = '', page = 1) {
  const response = await fetch(`${url}&page=${page}`)
  const data = await response.json()

  return data
}
