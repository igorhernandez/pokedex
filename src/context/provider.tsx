import { useState } from 'react'
import { IPokemon } from '../interfaces/pokemon.interfaces'
import AppContext from './context'

interface IAppProvider {
  children: React.ReactChild
}

const AppProvider = ({ children }: IAppProvider) => {
  const [capturedPokemons, setCapturedPokemons] = useState<IPokemon[]>([])

  const setToPokedex = (pokemons: IPokemon[]) => {
    setCapturedPokemons(pokemons)
  }

  return (
    <AppContext.Provider
      value={{
        capturedPokemons,
        setToPokedex
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
