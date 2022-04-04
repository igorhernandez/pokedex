import styled from 'styled-components/native'
import { colors } from '../../utils/colors'

export const Container = styled.View`
  padding: 0 15px;
  height: 100%;
`

export const PokedexContainer = styled.View`
  height: 80px;
  width: 80px;
  bottom: 0;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 50px;
  background-color: ${colors.white};
  position: absolute;
  margin-bottom: 10px;
  box-shadow: 0 1px 10px #777;
`
