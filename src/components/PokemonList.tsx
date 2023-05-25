import { useEffect} from "react";
import { Pokemon } from "../types/pokemon";
import { View, StyleSheet } from "react-native";
import PreviewCard from "./PreviewCard";

type PokemonListProps = {
    pokemonToSearch: string, 
    setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    pokemonList: Pokemon[],
    handlePokemonChoice?: (pokemonId: number) => void
}

export default function PokemonList({pokemonToSearch, setPokemonList, pokemonList, handlePokemonChoice}: PokemonListProps){

    useEffect(() => {
        if(pokemonList.length === 0){
            (async () => {
                let searchParameters: string = '' 
                if(pokemonToSearch !== 'default'){
                  searchParameters = pokemonToSearch
                }
  
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {method: 'GET'})
                const data = await response.json();
          
                console.log('DATA BEING RECEIVED ON POKEMONLIST: ', data)

                const newPokemonsState: Pokemon[] = await Promise.all(data.results.map(async (pokemon: any) => {
                  const pokemonResponse = await fetch(pokemon.url);
                  const pokemonData = await pokemonResponse.json();
            
                  return {
                    name: pokemon.name,
                    id: pokemonData.id.toString(),
                    pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id.toString()}.png`
                  };
                }));
          
                setPokemonList([...newPokemonsState])
            })();
        }
    }, [])

    return(
        <View style={styles.pokemonListContainer}>
                {pokemonList && pokemonList.map((pokemon, index) => 
                    <PreviewCard key={index} pokemon={pokemon} handlePokemonChoice={handlePokemonChoice} id={pokemon.id}/>
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    pokemonListContainer: {
        // margin: 'auto',
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 12, 
        borderWidth: 2,
        borderColor: 'purple',
        display: 'flex', 
        gap: 4, 
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})