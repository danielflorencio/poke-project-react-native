import { View, StyleSheet, Text, Image } from "react-native";
import { Pokemon } from "../types/pokemon";
import { StackTypes } from "../routes/MyStack";
import { useNavigation } from "@react-navigation/native";

type PreviewCardProps = {
    pokemon: Pokemon
}

export default function PreviewCard({pokemon}: PreviewCardProps){

    const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.previewCardContainer} onTouchEnd={() => navigation.navigate("InfoCard", {pokemonId: pokemon.id})}>
            <Text style={styles.pokemonIdStyles}>
            #{pokemon.id && String(pokemon.id).padStart(3, '0')}
            </Text>
            <View style={styles.imgContainer}>
                <Image source={{uri: `${pokemon.pokemonImgUrl}`}} style={styles.pokemonImg}/>
            </View>
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
        paddingRight: 2,
        color: '#4a5568'
    },
    imgContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonImg: {
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