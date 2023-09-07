import { expect, test, vi } from 'vitest'

import { App } from './App'
import { render, screen, user } from './testing-library'

test('works properly', async () => {
  const handleClick = vi.fn()
  render(<App onClick={handleClick} />)

  expect(screen.getByText('hello')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: 'click me' }))
  expect(handleClick).toHaveBeenCalledOnce()
})
