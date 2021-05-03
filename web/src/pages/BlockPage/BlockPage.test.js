import { render } from '@redwoodjs/testing'

import BlockPage from './BlockPage'

describe('BlockPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlockPage />)
    }).not.toThrow()
  })
})
