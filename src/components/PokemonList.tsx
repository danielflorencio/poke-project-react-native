import { useEffect} from "react";
import { Pokemon } from "../types/pokemon";
import { View, StyleSheet } from "react-native";
import PreviewCard from "./PreviewCard";

type PokemonListProps = {
    setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    pokemonList: Pokemon[]
}

export default function PokemonList({setPokemonList, pokemonList}: PokemonListProps){

    useEffect(() => {
        if(pokemonList.length === 0){
            (async () => {
  
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {method: 'GET'})
                const data = await response.json();

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
                    <PreviewCard key={index} pokemon={pokemon}/>
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    pokemonListContainer: {
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 12, 
        padding: 2,
        paddingVertical: 8,
        marginTop: 8,
        marginBottom: 8,
        display: 'flex', 
        gap: 2, 
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})