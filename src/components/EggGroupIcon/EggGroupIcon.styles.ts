import styled from 'styled-components/native'
import { colors } from '../../utils/colors'

interface IIconContainer {
  bgColor: string
  isFullIcon?: boolean
}

export const IconContainer = styled.View<IIconContainer>`
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ isFullIcon }) =>
    isFullIcon
      ? `
      margin-right: 10px;
      align-self: flex-start;
      flex-direction: row;
      padding: 8px 12px;
      min-width: 110px;
    `
      : `
        height: 30px;
        width: 30px;
    `}
  border-radius: 25px;
  align-items: center;
  justify-content: center;
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
