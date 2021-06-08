import { render } from '@redwoodjs/testing'

import CollectPage from './CollectPage'

describe('CollectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CollectPage />)
    }).not.toThrow()
  })
})
