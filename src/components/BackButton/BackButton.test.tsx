import { fireEvent, render } from '@testing-library/react-native'
import BackButton from './BackButton'

const mockedNavigation = jest.fn()

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedNavigation,
      navigate: mockedNavigation
    })
  }
})

describe('Render back button component', () => {
  it('should render back button', () => {
    const { getByTestId } = render(<BackButton color="#fff" />)
    expect(getByTestId('backButton')).toBeTruthy()
  })
  it('should be clickable back button', () => {
    const { getByTestId } = render(<BackButton />)
    const backButton = getByTestId('backButton')
    fireEvent(backButton, 'onPress')
    expect(mockedNavigation).toHaveBeenCalledTimes(1)
  })
})
