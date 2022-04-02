import api from './api'

interface IPokemons {
  id: number
  name: string
  url: string
}

export const getPokemonId = (url: string) => {
  const urlToReplace = 'https://pokeapi.co/api/v2/pokemon/'
  return parseInt(url.replaceAll(urlToReplace, ''))
}

export const getPokemons = async () => {
  try {
    const pokemonList = await getPokemonsList()
    const pokemons = await Promise.all(
      pokemonList.map(async ({ id, name, url }: IPokemons) => {
        const {
          egg_groups,
          color: { name: color }
        } = await getSpecies(url)

        return {
          id,
          name,
          url,
          species: { egg_groups, color }
        }
      })
    )

    return pokemons
  } catch (error) {}
}

export const getSpecies = async (url: string) => {
  try {
    if (!url) return null
    const {
      species: { url: speciesUrl }
    } = await getPokemon(url)
    return await api.get(speciesUrl).then((response) => response.data)
  } catch (error) {
    console.log('Get Species Error', error)
  }
}

export const getPokemon = async (url: string) => {
  try {
    if (!url) return null
    return await api.get(url).then((response) => response.data)
  } catch (error) {
    console.log('Get Pokemon Error', error)
  }
}

export const getPokemonsList = async () => {
  try {
    const url = '/pokemon'
    return await api.get(url).then(async (response) => {
      const {
        data: { results }
      } = response

      const pokemons = await results.map(({ name, url }: IPokemons) => {
        const pokemonId = getPokemonId(url)

        return {
          id: pokemonId,
          name,
          url
        }
      })

      return pokemons
    })
  } catch (error) {
    console.log('error', error)
  }
}
