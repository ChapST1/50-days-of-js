export const apiUrl = 'https://icanhazdadjoke.com'

export const config = {
  headers: {
    Accept: 'application/json'
  }
}

export async function getData () {
  const response = await fetch(apiUrl, config)
  const data = await response.json()
  const { joke } = data
  return {
    joke
  }
}
