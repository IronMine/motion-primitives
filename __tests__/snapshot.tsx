import { render } from '@testing-library/react'
import Page from '../app/page'
import 'intersection-observer';

it('renders homepage unchanged', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})