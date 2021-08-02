const API_ENDPOINT = `${window.location.protocol}//www.omdbapi.com/?apikey=${process.env.API_KEY}`

const CACHES = {}

const get = (query) => {
  const cache = CACHES[query]
  if (cache) return Promise.resolve(cache)
  return fetch(API_ENDPOINT + query)
    .then((response) => response.json())
    .then((data) => {
      CACHES[query] = data
      return data
    })
}

export const list = (query = '', page = 1) =>
  get(`&type=movie&s=${query}&page=${page}`)

export const show = (id) => get(`&i=${id}`)
