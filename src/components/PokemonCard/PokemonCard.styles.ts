import styled from 'styled-components/native'
import { treatColors } from '../../utils/colors'

interface IPokemonContainer {
  bgColor?: string
}

export const PokemonContainer = styled.View<IPokemonContainer>`
  ${({ bgColor }) =>
    bgColor
      ? `background-color: ${treatColors[bgColor]};`
      : `background-color: #777`}
  margin: 10px 0;
  padding: 6px;
  border-radius: 16px;
  flex-direction: row;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.3);
`

export const PokemonName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 16px;
`

export const PokemonImage = styled.Image`
  height: 100px;
  width: 100px;
`
export const PokemonDetails = styled.View`
  padding-left: 24px;
  justify-content: center;
`

export const PokemonEggIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 70px;
`

export const PokemonLogoContainer = styled.View`
  align-self: center;
`
