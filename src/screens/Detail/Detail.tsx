import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { capitalizeFirstLetter, handlePokemonImage } from '../../utils/helpers'
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from '../../utils/colors'
import {
  Container,
  EggsGroupContainer,
  Header,
  HeaderWrapper,
  PokeballContainer,
  PokeballLabel,
  PokemonImage,
  PokemonName,
  Wrapper
} from './Detail.styles'
import EggGroupIcon from '../../components/EggGroupIcon/EggGroupIcon'
import Pokeball from '../../../assets/pokeball.svg'
import PokeballDisabled from '../../../assets/pokeball_gray.svg'
import { getData, storeData } from '../../utils/asyncStorage'
import { StatusBar } from 'expo-status-bar'
import { RootRouteProps } from '../../../App'
import { IEggsGroups, IPokemon } from '../../interfaces/pokemon.interfaces'

const Detail = () => {
  const {
    params: { pokemon }
  } = useRoute<RootRouteProps<'Detail'>>()
  const navigation = useNavigation()
  const [pokemonCaptured, setPokemonCaptured] = useState(false)

  const getCapturedPokemons = async () => {
    const pokemons = await getData('capturedPokemons')
    return pokemons
  }

  const handleIsPokemonCaptured = (pokemons: IPokemon[]) => {
    if (!pokemons) return null
    const isCaptured = !!pokemons.find(({ id }) => id === pokemon.id)
    setPokemonCaptured(isCaptured)
    return isCaptured
  }

  const handlePokemonCaptured = async () => {
    const pokemons = await getCapturedPokemons()
    const isCaptured = handleIsPokemonCaptured(pokemons)
    setPokemonCaptured(isCaptured || false)
  }

  const handlePokemonCapture = async () => {
    setPokemonCaptured(!pokemonCaptured)

    const pokemons = await getCapturedPokemons()

    if (pokemons) {
      const isCaptured = handleIsPokemonCaptured(pokemons)

      if (isCaptured) {
        const removedCapturedPokemon = pokemons.filter(
          (capturedPokemon: IPokemon) =>
            capturedPokemon.id !== pokemon.id && capturedPokemon
        )
        if (!removedCapturedPokemon) return null
        storeData('capturedPokemons', [...removedCapturedPokemon])
        setPokemonCaptured(false)
      } else {
        storeData('capturedPokemons', [...pokemons, pokemon])
        setPokemonCaptured(true)
      }
    } else {
      storeData('capturedPokemons', [pokemon])
      setPokemonCaptured(true)
    }

    console.log('getData', await getData('capturedPokemons'))
    // removeData('capturedPokemons')
  }

  useEffect(() => {
    handlePokemonCaptured()
  }, [])

  return (
    <Wrapper>
      <StatusBar style="light" />
      <Container>
        <HeaderWrapper>
          <Header bgColor={colors.green}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="arrow-left" color={colors.white} size={28} />
            </TouchableOpacity>
            <PokemonName>
              {capitalizeFirstLetter(pokemon?.name || '')}
            </PokemonName>
            <EggsGroupContainer>
              {pokemon.species.egg_groups.map((eggGroup: IEggsGroups) => {
                return (
                  <EggGroupIcon key={eggGroup.name} eggName={eggGroup.name} />
                )
              })}
            </EggsGroupContainer>
            <PokemonImage source={{ uri: handlePokemonImage(pokemon.id) }} />
          </Header>
        </HeaderWrapper>
        <PokeballContainer>
          {pokemonCaptured ? (
            <TouchableOpacity onPress={handlePokemonCapture}>
              <Pokeball height={100} width={100} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handlePokemonCapture}>
              <PokeballDisabled height={100} width={100} />
            </TouchableOpacity>
          )}
          <PokeballLabel>
            {pokemonCaptured ? 'Pokemon capturado!' : 'Capturar Pokemon!'}
          </PokeballLabel>
        </PokeballContainer>
      </Container>
    </Wrapper>
  )
}

export default Detail
