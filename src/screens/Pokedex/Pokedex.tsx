import { useContext, useEffect, useState } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import BackButton from '../../components/BackButton/BackButton'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import AppContext from '../../context/context'
import { IPokemon } from '../../interfaces/pokemon.interfaces'
import { getData } from '../../utils/asyncStorage'
import { colors } from '../../utils/colors'
import { Container, SearchInput, SubTitle, Title } from './Pokedex.styles'

const Pokedex = () => {
  const { capturedPokemons } = useContext(AppContext)
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

  useEffect(() => {
    setPokemons(capturedPokemons)
  }, [capturedPokemons])

  return (
    <SafeAreaView>
      <Container>
        <FlatList
          ListEmptyComponent={() => (
            <SubTitle>
              {search !== '' &&
                filteredData.length === 0 &&
                'Nenhum resultado encontrado'}
              {!search &&
                !pokemons.length &&
                'Ainda não tem nenhum pokemon capturado! Temos que pegar.'}
            </SubTitle>
          )}
          ListHeaderComponent={
            <>
              <BackButton color={colors.black} />
              <Title>Pokemons capturados</Title>
              {pokemons.length > 0 && (
                <SearchInput
                  placeholder="Buscar por pokémons"
                  onChangeText={(text) => setSearch(text)}
                />
              )}
            </>
          }
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
