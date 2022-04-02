import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text, SafeAreaView, FlatList } from 'react-native'
import { getPokemons } from './src/services'

interface ISpecies {
  color: { name: string; url: string }
  egg_groups: Array<{ name: string; url: string }>
}

interface IPokemon {
  id: number
  name: string
  species: ISpecies
  url: string
}

export default function App() {
  const [pokemons, setPokemons] = useState<Array<IPokemon>>([
    {
      id: 0,
      name: '',
      species: {
        color: { name: '', url: '' },
        egg_groups: [{ name: '', url: '' }]
      },
      url: ''
    }
  ])

  const handleGetPokemons = async () => {
    const pokemonsResponse = await getPokemons()
    if (!pokemonsResponse) return null
    setPokemons(pokemonsResponse)
  }

  useEffect(() => {
    handleGetPokemons()
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
