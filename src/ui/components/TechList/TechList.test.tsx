import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TechList from './TechList'

describe('Tech List component', () => {
  it('should be able to add new tech', () => {
    render(<TechList />)

    const button = screen.getByText(/Add/)

    expect(button).toBeInTheDocument()

    userEvent.click(button)

    expect(screen.getByTestId('tech-list')).toContainElement(
      screen.getByText('React'),
    )
  })
})
