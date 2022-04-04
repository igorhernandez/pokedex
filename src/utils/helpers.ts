export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const removeBreakLines = (string: string) =>
  string.replace(/[\r\n\f]+/gm, ' ')

export const handlePokemonImage = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export const getPokemonId = (url: string) => {
  const urlToReplace = 'https://pokeapi.co/api/v2/pokemon/'
  return parseInt(url.replace(urlToReplace, ''))
}
