import React from 'react'
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import SearchForm from '../../../src/components/search-form'

describe('<SearchForm />', () => {
  let query = ''
  beforeEach(() => {
    render(<SearchForm onChangeQuery={(value) => (query = value)} />)
  })
  afterAll(() => {
    cleanup()
  })

  test('should render correct placeholder', () => {
    expect(
      screen.getByPlaceholderText('Search for any movie...'),
    ).toBeInTheDocument()
  })

  test('should read input changes', () => {
    const input = screen.getByPlaceholderText('Search for any movie...')

    fireEvent.change(input, { target: { value: 'Search Something' } })

    expect(query).toBe('Search Something')
  })
})
