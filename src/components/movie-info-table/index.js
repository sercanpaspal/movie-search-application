import React from 'react'
import styles from './index.module.css'

const MovieInfoTable = ({ movie }) => (
  <table cellPadding={0} cellSpacing={0} className={styles.table}>
    <tbody>
      <tr>
        <th>Title</th>
        <td>{movie.Title}</td>
      </tr>
      <tr>
        <th>Genre</th>
        <td>{movie.Genre}</td>
      </tr>
      <tr>
        <th>Year</th>
        <td>{movie.Year}</td>
      </tr>
      <tr>
        <th>Runtime</th>
        <td>{movie.Runtime}</td>
      </tr>
      <tr>
        <th>Director</th>
        <td>{movie.Director}</td>
      </tr>
      <tr>
        <th>Country</th>
        <td>{movie.Country}</td>
      </tr>
      <tr>
        <th>Rewards</th>
        <td>{movie.Rewards}</td>
      </tr>
      <tr>
        <th>IMDB</th>
        <td>{movie.imdbRating}</td>
      </tr>
      <tr>
        <th>Metascore</th>
        <td>{movie.Metascore}</td>
      </tr>
      <tr>
        <th>Ratings</th>
        <td>
          <ul>
            {movie.Ratings?.map((rating, _i) => (
              <li key={_i}>
                {rating.Source} <strong>{rating.Value}</strong>
              </li>
            ))}
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
)

export default MovieInfoTable
