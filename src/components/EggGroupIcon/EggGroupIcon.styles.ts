import styled from 'styled-components/native'

interface IIconContainer {
  bgColor: string
}

export const IconContainer = styled.View`
  ${({ bgColor }: IIconContainer) => bgColor && `background-color: ${bgColor};`}
  border-radius: 25px;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
`
