import styled from 'styled-components/native'
import { colors } from '../../utils/colors'

interface IIconContainer {
  bgColor: string
}

export const IconContainer = styled.View`
  ${({ bgColor }: IIconContainer) => bgColor && `background-color: ${bgColor};`}
  border-radius: 25px;
  align-items: center;
  align-self: flex-start;
  flex-direction: row;
  padding: 8px 12px;
  min-width: 110px;
  justify-content: center;
  margin-right: 10px;
`

export const EggNameLabel = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  margin-left: 8px;
`

export const EggGroupsContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
`
