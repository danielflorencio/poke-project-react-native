import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native"
import { Pokemon } from "../types/pokemon";
import Characteristics from "./Characteristics";
import Stats from "./Stats";

// type InfoCardProps = {
//     pokemonId: number, 
//     handleReturnToInitialScreen: () => void,
//     handlePokemonChoice: (pokemonId: number) => void
// }

const screenHeight = Dimensions.get('window').height;

export default function InfoCardSimplified({route}: {route: any}){

    console.log('ROUTE: ', route)

    const { pokemonId } = route.params

    const [myPokemon, setMyPokemon] = useState<Pokemon>();
 
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`, {method: 'GET'})
            const data = await response.json();

            const colorResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`, {method: 'GET'})
            const colorData = await colorResponse.json();

            const descriptionResponse = await fetch(`https://pokeapi.co/api/v2/characteristic/${pokemonId}/`, {method: 'GET'})
            const descriptionData = await descriptionResponse.json();

            // The code below looks through all the descriptions from the API, and then return only the one that's in english.
            const newDescriptionData = descriptionData.descriptions.find((description: any) => description.language.name === 'en');

            console.log('Pokemon being received on InfoCard data fetching: ', data)
            setMyPokemon({
                name: data.name, 
                id: pokemonId, 
                height: data.height.toString(), 
                weight: data.weight.toString(),
                hp: data.stats[0].base_stat,
                att: data.stats[1].base_stat,
                def: data.stats[2].base_stat,
                satk: data.stats[3].base_stat,
                sdef: data.stats[4].base_stat,
                spd: data.stats[5].base_stat,
                moves: [data.moves[0].move.name, data.moves[1].move.name],
                colorTheme: colorData.color.name,
                description: newDescriptionData.description
            })
        })();
    }, [pokemonId])
    
    return(
        // <ScrollView contentContainerStyle={{display: 'flex', minHeight: screenHeight, flexDirection: 'column', justifyContent: 'space-between'}} style={[styles.scrollViewContainer, {backgroundColor: `${myPokemon?.colorTheme === null || undefined ? ('#38a169') : (myPokemon?.colorTheme)}`}]}>
        <View style={[{backgroundColor: `${myPokemon?.colorTheme === null || undefined ? ('#38a169') : (myPokemon?.colorTheme)}`}, styles.scrollViewContainer]}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.pokemonName}>{myPokemon?.name && myPokemon.name[0].toUpperCase() + myPokemon.name.slice(1, myPokemon.name.length)}</Text>
                    <Text style={styles.pokemonId}>#{myPokemon?.id}</Text>
                </View>
            </View>            
            <View style={styles.whiteBox}>
                <Characteristics weight={myPokemon?.weight} height={myPokemon?.height} moves={myPokemon?.moves} pokemonId={pokemonId}/>
                <Text></Text>
                <Stats hp={myPokemon?.hp} att={myPokemon?.att} def={myPokemon?.def} satk={myPokemon?.satk} sdef={myPokemon?.sdef} spd={myPokemon?.spd}/>
            </View>
        </View>
        // </ScrollView>

    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        minHeight: '100%',
        paddingHorizontal: 12,
        paddingBottom: 16,
    },
    mainContainer: {
        flex: 1
    },
    pokemonName: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
    },
    pokemonId: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    whiteBox: {
        minHeight: 200,
        width: '100%',
        borderRadius: 12, 
        backgroundColor: '#fff'
    }
})