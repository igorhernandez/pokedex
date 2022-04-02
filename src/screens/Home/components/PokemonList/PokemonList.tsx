import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native'
import EggGroupsIcons from '../../../../components/EggGroupIcon/EggGroupIcon'
import {
  capitalizeFirstLetter,
  handlePokemonImage
} from '../../../../utils/helpers'
import {
  PokemonContainer,
  PokemonDetails,
  PokemonEggIcons,
  PokemonImage,
  PokemonName
} from './PokemonList.styles'

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

interface IPokemonList {
  pokemons: Array<IPokemon>
  onEndReached: any
  isLoading: any
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
    if (!item.name) {
      return <></>
    }

    return (
      <TouchableOpacity key={item.id}>
        <PokemonContainer bgColor={item.species.color}>
          <PokemonImage
            source={{ uri: handlePokemonImage(item.id) }}
          ></PokemonImage>
          <PokemonDetails>
            <PokemonName>{capitalizeFirstLetter(item.name)}</PokemonName>
            <PokemonEggIcons>
              {item.species.egg_groups.map((eggGroup) => {
                return (
                  <EggGroupsIcons key={eggGroup.name} eggName={eggGroup.name} />
                )
              })}
            </PokemonEggIcons>
          </PokemonDetails>
        </PokemonContainer>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => renderItem(item)}
      onEndReachedThreshold={1}
      onEndReached={onEndReached}
      removeClippedSubviews
      refreshing={true}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      ListFooterComponent={shouldRenderLoader}
    />
  )
}

export default PokemonList
