import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MovieListItem from '../../../src/components/movie-list-item'

const dummyMovie = {
  imdbID: '123',
  Title: 'The Lord of the Rings 1',
  Poster: 'poster source',
  Year: '2021',
}

describe('<MovieListItem />', () => {
  test('should render correct movie item', () => {
    render(
      <Router>
        <MovieListItem movie={dummyMovie} />
      </Router>,
    )

    const poster = screen.getByRole('img')
    const link = screen.getByRole('link')
    const title = screen.getByRole('heading')
    const yearNote = screen.getByRole('note')

    expect(poster).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(yearNote).toBeInTheDocument()

    expect(link.getAttribute('href')).toBe(`/movie/${dummyMovie.imdbID}`)
    expect(title.textContent).toBe(dummyMovie.Title)
    expect(yearNote.textContent).toBe(dummyMovie.Year)
  })
})
