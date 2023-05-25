import { PokeType } from "./pokeType"

export type Pokemon = {
    pokemonImgUrl?: string,
    id: number,
    name: string,
    description?: string,
    moves?: string[], 
    colorTheme?: string,
    types?: PokeType[],
    weight?: number, 
    height?: number,
    hp?: number,
    att?: number,
    def?: number,
    satk?: number,
    sdef?: number,
    spd?: number 
}