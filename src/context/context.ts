import { createContext } from 'react'
import { IPokemon } from '../interfaces/pokemon.interfaces'

interface IAppContext {
  capturedPokemons: IPokemon[]
  setToPokedex: (pokemons: IPokemon[]) => void
}

const AppContext = createContext<IAppContext>({
  capturedPokemons: [],
  setToPokedex: (pokemons: IPokemon[]) => pokemons
})

export default AppContext
