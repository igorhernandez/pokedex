import { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { capitalizeFirstLetter, handlePokemonImage } from '../../utils/helpers'
import { treatColors } from '../../utils/colors'
import {
  AboutPokemon,
  Container,
  Content,
  EggsGroupContainer,
  Header,
  HeaderWrapper,
  PokeballContainer,
  PokeballLabel,
  PokemonImage,
  PokemonName,
  SubTitle,
  Title,
  Wrapper
} from './Detail.styles'
import EggGroupIcon from '../../components/EggGroupIcon/EggGroupIcon'
import Pokeball from '../../../assets/pokeball_closed.svg'
import PokeballOpened from '../../../assets/pokeball_opened.svg'
import { getData, storeData } from '../../utils/asyncStorage'
import { StatusBar } from 'expo-status-bar'
import { RootRouteProps } from '../../../App'
import { IEggsGroups, IPokemon } from '../../interfaces/pokemon.interfaces'
import EggGroupFullIcon from '../../components/EggGroupFullIcon/EggGroupFullIcon'
import { EggGroupsContainer } from '../../components/EggGroupFullIcon/EggGroupFullIcon.styles'
import BackButton from '../../components/BackButton/BackButton'

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

    // console.log('getData', await getData('capturedPokemons'))
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
          <Header bgColor={treatColors[pokemon.species.color]}>
            <BackButton />
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
        <Content>
          <AboutPokemon>{pokemon.description}</AboutPokemon>
          <View>
            <SubTitle>Egg Groups</SubTitle>
            <EggGroupsContainer>
              {pokemon.species.egg_groups.map((eggGroup) => {
                return (
                  <EggGroupFullIcon
                    eggName={eggGroup.name}
                    key={eggGroup.name}
                  />
                )
              })}
            </EggGroupsContainer>
          </View>
        </Content>
        <PokeballContainer>
          {pokemonCaptured ? (
            <TouchableOpacity onPress={handlePokemonCapture}>
              <Pokeball height={85} width={85} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handlePokemonCapture}>
              <PokeballOpened height={85} width={85} />
            </TouchableOpacity>
          )}
          <PokeballLabel>
            {pokemonCaptured ? 'Pokémon capturado!' : 'Lançar Pokébola!'}
          </PokeballLabel>
        </PokeballContainer>
      </Container>
    </Wrapper>
  )
}

export default Detail
