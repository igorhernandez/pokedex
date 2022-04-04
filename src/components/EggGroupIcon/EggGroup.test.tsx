import { render } from '@testing-library/react-native'
import EggGroupIcon from './EggGroupIcon'

describe('Render the Card component', () => {
  it('should render a egg group name', () => {
    const { getByText } = render(<EggGroupIcon eggName="monster" isFullIcon />)
    expect(getByText('Monster')).toBeTruthy()
  })
})
