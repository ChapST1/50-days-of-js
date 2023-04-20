import { jokeContent } from '../constants/index.js'
import { getData } from '../API/index.js'

export async function showJoke () {
  const { joke } = await getData()
  jokeContent.textContent = joke
}
