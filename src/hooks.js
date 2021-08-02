import { useEffect, useState } from 'react'
import { show, list } from './api'

export const useMovie = (id) => {
  const [loading, setLoading] = useState()
  const [movie, setMovie] = useState({})

  useEffect(async () => {
    setLoading(true)
    setMovie(await show(id))
    setLoading(false)
  }, [id])

  return [movie, loading]
}

export const useMovieList = (query, page) => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const search = async () => {
    if (query.length > 2) {
      setLoading(true)
      setResult(await list(query, page))
    } else {
      setResult(null)
    }
    setLoading(false)
  }

  useEffect(search, [page])

  useEffect(() => {
    const timer = setTimeout(search, 300)

    return () => clearTimeout(timer)
  }, [query])

  return [result, loading]
}
