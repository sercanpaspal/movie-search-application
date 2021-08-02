import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorMessage from '../../../src/components/error-message'

describe('<ErrorMessage />', () => {
  test('should render correct error message', () => {
    render(<ErrorMessage message={'Error message!'} />)

    expect(screen.getByText('Error message!')).toBeInTheDocument()
  })
})
