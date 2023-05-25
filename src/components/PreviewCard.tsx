import { View, StyleSheet, Text, Image } from "react-native";
import { Pokemon } from "../types/pokemon";
import { StackTypes } from "../routes/MyStack";
import { useNavigation } from "@react-navigation/native";

type PreviewCardProps = {
    pokemon: Pokemon, 
    handlePokemonChoice?: (pokemonId: number) => void,
    id: number
}

export default function PreviewCard({pokemon, handlePokemonChoice, id}: PreviewCardProps){

    const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.previewCardContainer} onTouchEnd={() => navigation.navigate("InfoCard", {pokemonId: pokemon.id})}>
            <Text style={styles.pokemonIdStyles}>
            #{pokemon.id}
            </Text>
            <Image source={{uri: `${pokemon.pokemonImgUrl}`}} style={styles.pokemonImg}/>
            <View style={styles.lowerBlackBox}>
                <Text style={styles.pokemonName}>{pokemon.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    previewCardContainer: {
        height: 120, 
        width: 120,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    pokemonIdStyles: {
        textAlign: 'right',
        paddingTop: 2,
        paddingRight: 2
    },
    pokemonImg: {
        position: 'absolute',
        width: 80,
        height: 80
    },
    lowerBlackBox: {
        textAlign: 'center', 
        height: '40%',
        borderRadius: 8,
        backgroundColor: '#ccc',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    pokemonName: {
        position: 'absolute',
        bottom: 6, 
    }
})