import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { getPokemons } from '../../services'

import PokemonList from './components/PokemonList/PokemonList'
import { Container } from './Home.styles'

interface ISpecies {
  color: string
  egg_groups: Array<{ name: string; url: string }>
}

interface IPokemon {
  id: number
  name: string
  species: ISpecies
  url: string
}

function Home() {
  const [pokemons, setPokemons] = useState<Array<IPokemon>>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleGetPokemons = (page: number) => {
    setLoading(true)
    getPokemons(page)
      .then((response) => {
        console.log('response', response)
        setPokemons((prevPokemons) => [...prevPokemons, ...response])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    handleGetPokemons(page)
  }, [page])

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Container>
        <PokemonList
          pokemons={pokemons}
          onEndReached={() => setPage((prevPage) => prevPage + 1)}
          isLoading={loading}
        />
      </Container>
    </SafeAreaView>
  )
}

export default Home
