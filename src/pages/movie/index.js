import React, { useEffect } from 'react'
import { useMovie } from '../../hooks'
import ErrorMessage from '../../components/error-message'
import MoviePoster from '../../components/movie-poster'
import MovieInfoTable from '../../components/movie-info-table'
import styles from './index.module.css'
import LoadingContent from '../../components/loading-content'

const MoviePage = ({
  match: {
    params: { id },
  },
}) => {
  const [movie, loading] = useMovie(id)

  if (loading) return <LoadingContent />

  if (movie?.Response === 'False')
    return <ErrorMessage message={'Movie not found!'} />

  return (
    <div className={styles.content}>
      <div className={styles.col}>
        <MoviePoster movie={movie} />
      </div>
      <div className={styles.col}>
        <MovieInfoTable movie={movie} />
      </div>
    </div>
  )
}

export default MoviePage
