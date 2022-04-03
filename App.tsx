import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Screens } from './src/navigation/screenNames'
import Detail from './src/screens/Detail/Detail'
import Home from './src/screens/Home/Home'
import { IPokemon } from './src/interfaces/pokemon.interfaces'

export type RootStackParamList = {
  Home: undefined
  Detail: { pokemon: IPokemon }
}

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>

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
