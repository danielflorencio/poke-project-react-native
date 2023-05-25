import { View } from "react-native";

type PokemonCharacteristicsProps = {
    weight?: number,
    height?: number, 
    moves?: string[],
    pokemonId?: number,
}




export default function Stats({weight, height, moves, pokemonId}: PokemonCharacteristicsProps){
    return(
        <View>
        </View>
    )
}