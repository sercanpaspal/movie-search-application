import React from 'react'
import MovieListItem from '../movie-list-item'
import styles from './index.module.css'

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie, _i) => (
        <MovieListItem movie={movie} key={_i} />
      ))}
    </ul>
  )
}

export default MovieList
