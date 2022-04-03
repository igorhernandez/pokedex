import api from './api'

interface IPokemons {
  id: number
  name: string
  url: string
}

const getPokemonId = (url: string) => {
  const urlToReplace = 'https://pokeapi.co/api/v2/pokemon/'
  return parseInt(url.replace(urlToReplace, ''))
}

export const getPokemons = async (page: number) => {
  try {
    const pokemonList = await getPokemonsList(page)
    if (!pokemonList) return null
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
  } catch (error) {
    console.log('Get Pokemons Error', error)
  }
}

export const getSpecies = async (url: string) => {
  if (!url) return null
  try {
    const {
      species: { url: speciesUrl }
    } = await getPokemon(url)
    return await api.get(speciesUrl).then((response) => response.data)
  } catch (error) {
    console.log('Get Species Error', error)
  }
}

export const getPokemonById = async (id: number) => {
  if (!id) return null
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    return await api.get(url).then((response) => response.data)
  } catch (error) {
    console.log('Get Pokemon Error', error)
  }
}

export const getPokemon = async (url: string) => {
  if (!url) return null
  try {
    return await api.get(url).then((response) => response.data)
  } catch (error) {
    console.log('Get Pokemon Error', error)
  }
}

export const getPokemonsList = async (page: number) => {
  try {
    const offset = (page - 1) * 10
    console.log('offset', offset)
    const url = `/pokemon?offset=${offset}&limit=10`

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
    console.log('Get Pokemon List Error', error)
  }
}
