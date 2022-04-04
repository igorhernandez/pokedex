import { useEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { getPokemons } from '../../services'

import PokemonList from './components/PokemonList/PokemonList'
import { Container, PokedexContainer } from './Home.styles'
import { IPokemon } from '../../interfaces/pokemon.interfaces'
import PokedexIcon from '../../../assets/pokedex.svg'
import { Screens } from '../../navigation/screenNames'

function Home({ navigation }) {
  const [pokemons, setPokemons] = useState<Array<IPokemon>>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleGetPokemons = (page: number) => {
    setLoading(true)
    getPokemons(page)
      .then((response) => {
        if (!response) {
          return null
        }
        setPokemons((prevPokemons) => [
          ...prevPokemons,
          ...(response as IPokemon[])
        ])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const onEndReached = () => setPage((prevPage) => prevPage + 1)

  useEffect(() => {
    handleGetPokemons(page)
  }, [page])

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Container>
        <PokemonList
          pokemons={pokemons}
          onEndReached={onEndReached}
          isLoading={loading}
        />
        <TouchableOpacity onPress={() => navigation.navigate(Screens.POKEDEX)}>
          <PokedexContainer>
            <PokedexIcon width={50} height={50} />
          </PokedexContainer>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  )
}

export default Home
