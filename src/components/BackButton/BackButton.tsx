import { TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utils/colors'

const BackButton = ({ color = colors.white }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity testID="backButton" onPress={() => navigation.goBack()}>
      <FontAwesome5 name="arrow-left" color={color} size={28} />
    </TouchableOpacity>
  )
}

export default BackButton
