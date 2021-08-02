import React from 'react'
import { render, screen } from '@testing-library/react'
import MovieInfoTable from '../../../src/components/movie-info-table'

const dummyMovie = {
  Title: 'The Lord of the Rings 1',
  Year: '2021',
  Director: 'Peter Jackson',
  Country: 'US',
  Ratings: [
    { Source: 'Rotten Tomatoes', value: '100' },
    { Source: 'IGN', value: '100' },
  ],
}

describe('<MovieInfoTable />', () => {
  test('should render correct movie info', () => {
    render(<MovieInfoTable movie={dummyMovie} />)

    const { Ratings, ...props } = dummyMovie

    Object.keys(props).forEach((key) => {
      expect(screen.getByText(dummyMovie[key])).toBeInTheDocument(
        dummyMovie[key],
      )
    })

    expect(screen.getAllByRole('listitem')).toHaveLength(Ratings.length)
  })
})
