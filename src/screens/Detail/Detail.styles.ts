import styled from 'styled-components/native'
import { colors } from '../../utils/colors'

interface IHeader {
  bgColor?: string
}

export const Container = styled.View`
  height: 100%;
  background-color: ${colors.white};
`

export const Wrapper = styled.View`
  background-color: ${colors.green};
`

export const PokemonName = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.white};
  margin-top: 15px;
`

export const PokemonImage = styled.Image`
  height: 300px;
  width: 300px;
  margin: auto;
`

export const HeaderWrapper = styled.View`
  transform: scaleX(2);
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  overflow: hidden;
`

export const Header = styled.View<IHeader>`
  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`}
  transform: scaleX(0.5);
  padding: 60px 15px 15px 15px;
`
export const EggsGroupContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 70px;
  margin-top: 15px;
`

export const PokeballContainer = styled.View`
  position: absolute;
  bottom: 40px;
  width: 150px;
  align-self: center;
  align-items: center;
`

export const PokeballLabel = styled.Text`
  font-weight: bold;
`
