import { render } from '@redwoodjs/testing'

import WeeklyPage from './WeeklyPage'

describe('WeeklyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeeklyPage />)
    }).not.toThrow()
  })
})
