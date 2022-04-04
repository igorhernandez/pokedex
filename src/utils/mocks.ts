import { IPokemon } from '../interfaces/pokemon.interfaces'

export const pokemonMock: IPokemon = {
  id: 1,
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  description:
    'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
  species: {
    egg_groups: [
      {
        name: 'monster',
        url: 'https://pokeapi.co/api/v2/egg-group/1/'
      },
      {
        name: 'plant',
        url: 'https://pokeapi.co/api/v2/egg-group/7/'
      }
    ],
    color: 'green'
  }
}
