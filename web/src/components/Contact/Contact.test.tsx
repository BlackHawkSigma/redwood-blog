import { render } from '@redwoodjs/testing'

import Contact from './Contact'

describe('Contact', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Contact />)
    }).not.toThrow()
  })
})
