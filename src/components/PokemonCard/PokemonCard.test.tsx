import { render } from '@testing-library/react-native'
import { pokemonMock } from '../../utils/mocks'
import PokemonCard from './PokemonCard'

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

describe('Render pokemon card component', () => {
  it('should render pokemon name', () => {
    const { getByText } = render(<PokemonCard pokemon={pokemonMock} />)
    expect(getByText('Bulbasaur')).toBeTruthy()
  })
})
