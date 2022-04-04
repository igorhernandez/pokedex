import { ActivityIndicator, FlatList, View } from 'react-native'
import { PokemonLogoContainer } from './PokemonList.styles'
import { IPokemon } from '../../../../interfaces/pokemon.interfaces'
import PokemonLogo from '../../../../../assets/pokemon_logo.svg'
import PokemonCard from '../../../../components/PokemonCard/PokemonCard'

interface IPokemonList {
  pokemons: Array<IPokemon>
  onEndReached: () => void
  isLoading: boolean
}

function PokemonList({ pokemons, isLoading, onEndReached }: IPokemonList) {
  const shouldRenderLoader = () =>
    isLoading ? (
      <View style={{ height: 100, marginTop: 20 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <></>
    )

  const renderItem = (item: IPokemon) => {
    if (!item) {
      return <></>
    }

    return <PokemonCard pokemon={item} />
  }

  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => renderItem(item)}
      onEndReachedThreshold={0.01}
      onEndReached={onEndReached}
      windowSize={7}
      removeClippedSubviews
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={
        <PokemonLogoContainer>
          <PokemonLogo width={130} height={70} />
        </PokemonLogoContainer>
      }
      ListFooterComponent={shouldRenderLoader}
    />
  )
}

export default PokemonList
