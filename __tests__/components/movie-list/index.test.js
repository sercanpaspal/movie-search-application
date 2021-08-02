import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, cleanup } from '@testing-library/react'
import MovieList from '../../../src/components/movie-list'

const dummyMovies = [
  { Title: 'The Lord of the Rings 1' },
  { Title: 'The Lord of the Rings 2' },
  { Title: 'The Lord of the Rings 3' },
]

describe('<MovieList />', () => {
  test('should render correct item length', () => {
    render(
      <Router>
        <MovieList movies={dummyMovies} />
      </Router>,
    )

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
})
