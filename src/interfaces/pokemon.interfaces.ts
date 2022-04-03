export interface IEggsGroups {
  name: string
  url: string
}

export interface ISpecies {
  color: string
  egg_groups: Array<IEggsGroups>
}

export interface IPokemon {
  id: number
  name: string
  species: ISpecies
  url: string
}
