import styled from 'styled-components/native'
import { colors } from '../../../../utils/colors'

export const PokemonLogoContainer = styled.View`
  align-self: center;
`

export const PokemonListEmpty = styled.Text`
  text-align: center;
  align-self: center;
  font-size: 28px;
  margin-top: 50px;
`

export const RetryRequestButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 25px;
`

export const RetryRequestText = styled.Text`
  font-weight: bold;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 15px;
  font-size: 18px;
`
