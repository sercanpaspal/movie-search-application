import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import MoviePoster from '../movie-poster'

const MovieListItem = ({ movie }) => {
  return (
    <li className={styles.item}>
      <Link to={`/movie/${movie.imdbID}`}>
        <div className={styles.innerContent}>
          <div className={styles.poster}>
            <MoviePoster movie={movie} />
          </div>
          <h3 className={styles.title}>{movie.Title}</h3>
          <span role="note" className={styles.subTitle}>
            {movie.Year}
          </span>
        </div>
      </Link>
    </li>
  )
}

export default MovieListItem
