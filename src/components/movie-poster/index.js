import React from 'react'
import styles from './index.module.css'

const MoviePoster = ({ movie }) => (
  <img
    className={styles.poster}
    src={
      movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/300x425/000000/FFFFFF/?text=' +
          encodeURI(movie.Title)
    }
    title={movie.Title}
    alt={movie.Title}
  />
)

export default MoviePoster
