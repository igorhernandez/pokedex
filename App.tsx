import { Text, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}
