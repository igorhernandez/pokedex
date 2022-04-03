import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Screens } from './src/navigation/screenNames'
import Detail from './src/screens/Detail/Detail'
import Home from './src/screens/Home/Home'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.HOME}
          options={{ title: 'Pokedéx' }}
          component={Home}
        />
        <Stack.Screen
          name={Screens.DETAIL}
          options={{ headerShown: false }}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
