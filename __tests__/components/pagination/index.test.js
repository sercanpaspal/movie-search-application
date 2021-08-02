import React from 'react'
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import Pagination from '../../../src/components/pagination'

let currentPage = 1
const totalPage = 100

describe('<Pagination />', () => {
  beforeEach(() => {
    render(
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onChangePage={(page) => (currentPage = page)}
      />,
    )
  })
  afterAll(() => {
    cleanup()
  })

  test('should render correct current page', () => {
    expect(screen.getByText(currentPage)).toBeInTheDocument()
  })

  test('should forward next page', () => {
    const previousButton = screen.getByText('previous')
    const nextButton = screen.getByText('next')
    const firstButton = screen.getByText('first')

    expect(firstButton).toBeDisabled()
    expect(previousButton).toBeDisabled()
    expect(nextButton).toBeEnabled()

    fireEvent.click(nextButton)

    expect(currentPage).toBe(2)
  })
})
