import { View, StyleSheet } from "react-native"


type InfoCardProps = {
    pokemonId?: number, 
    handleReturnToInitialScreen?: () => void,
    handlePokemonChoice?: (pokemonId: number) => void,
    route: any
}

export default function InfoCard({pokemonId, handleReturnToInitialScreen, handlePokemonChoice, route}: InfoCardProps){

    const { newPokemonId } = route.params

    return(
        <View>The Id is {newPokemonId}</View>
    )
}

const styles = StyleSheet.create({

})