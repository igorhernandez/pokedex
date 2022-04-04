import styled from 'styled-components/native'
import { colors } from '../../utils/colors'

export const Container = styled.View`
  padding: 20px 20px 0 20px;
`

export const Title = styled.Text`
  font-size: 26px;
  color: ${colors.black};
  font-weight: bold;
  align-self: center;
  margin: 20px 0;
  color: ${colors.black};
`

export const SubTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  line-height: 28px;
  color: ${colors.gray};
  font-weight: bold;
  margin-top: 20px;
`

export const SearchInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
`
