import { render } from '@redwoodjs/testing'

import BooksPage from './BooksPage'

describe('BooksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BooksPage />)
    }).not.toThrow()
  })
})
