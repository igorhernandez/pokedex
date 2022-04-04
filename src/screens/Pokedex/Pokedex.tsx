import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, TextInput } from 'react-native'
import BackButton from '../../components/BackButton/BackButton'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { IPokemon } from '../../interfaces/pokemon.interfaces'
import { getData } from '../../utils/asyncStorage'
import { colors } from '../../utils/colors'
import { Container, Title } from './Pokedex.styles'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [filteredData, setFilteredData] = useState(pokemons)
  const [search, setSearch] = useState('')
  const flatListData = search ? filteredData : pokemons

  const handleCapturedPokemons = async () => {
    const pokemonsCaptured = await getData('capturedPokemons')
    if (!pokemonsCaptured) return
    setPokemons(pokemonsCaptured)
  }

  const handleSearch = () => {
    const searchList = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredData(searchList)
  }

  useEffect(() => {
    handleSearch()
  }, [search])

  useEffect(() => {
    handleCapturedPokemons()
  }, [])

  return (
    <SafeAreaView>
      <Container>
        <BackButton color={colors.black} />
        <Title>Pokédex</Title>
        <TextInput
          placeholder="Buscar por pokémons"
          onChangeText={(text) => setSearch(text)}
        />
        <FlatList
          data={flatListData}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          windowSize={7}
          initialNumToRender={7}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
        />
      </Container>
    </SafeAreaView>
  )
}

export default Pokedex
