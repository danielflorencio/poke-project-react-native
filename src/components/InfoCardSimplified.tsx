import { View, StyleSheet, Text } from "react-native"


// type InfoCardProps = {
//     pokemonId: number, 
//     handleReturnToInitialScreen: () => void,
//     handlePokemonChoice: (pokemonId: number) => void
// }

export default function InfoCardSimplified({route}: {route: any}){

    console.log('ROUTE: ', route)

    const { pokemonId } = route.params
    
    return(
        <View><Text>The pokemonID is {pokemonId}</Text></View>
    )
}

const styles = StyleSheet.create({

})