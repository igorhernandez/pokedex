import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../../../App'
import { IPokemon } from '../../interfaces/pokemon.interfaces'
import { Screens } from '../../navigation/screenNames'
import { capitalizeFirstLetter, handlePokemonImage } from '../../utils/helpers'
import EggGroupIcon from '../EggGroupIcon/EggGroupIcon'
import {
  PokemonContainer,
  PokemonDetails,
  PokemonEggIcons,
  PokemonImage,
  PokemonName
} from './PokemonCard.styles'

interface IPokemonCard {
  pokemon: IPokemon
}

const PokemonCard = ({ pokemon }: IPokemonCard) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate({
          name: Screens.DETAIL,
          params: { pokemon }
        })
      }
      key={pokemon.id}
    >
      <PokemonContainer bgColor={pokemon.species.color}>
        <PokemonImage
          source={{ uri: handlePokemonImage(pokemon.id) }}
        ></PokemonImage>
        <PokemonDetails>
          <PokemonName>{capitalizeFirstLetter(pokemon.name)}</PokemonName>
          <PokemonEggIcons>
            {pokemon.species.egg_groups.map((eggGroup) => {
              return (
                <EggGroupIcon key={eggGroup.name} eggName={eggGroup.name} />
              )
            })}
          </PokemonEggIcons>
        </PokemonDetails>
      </PokemonContainer>
    </TouchableOpacity>
  )
}

export default PokemonCard
