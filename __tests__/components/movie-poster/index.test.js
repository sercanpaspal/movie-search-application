import React from 'react'
import { render, screen } from '@testing-library/react'
import MoviePoster from '../../../src/components/movie-poster'

const dummyMovie = { Title: 'The Lord of the Rings 1', Poster: 'poster source' }

describe('<MoviePoster />', () => {
  test('should render image with correct properties', () => {
    render(<MoviePoster movie={dummyMovie} />)

    const poster = screen.getByRole('img')

    expect(poster).toBeInTheDocument()

    expect(poster.title).toBe(dummyMovie.Title)
    expect(poster.getAttribute('alt')).toBe(dummyMovie.Title)
    expect(poster.getAttribute('src')).toBe(dummyMovie.Poster)
  })
})
