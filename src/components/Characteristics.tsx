import { Divider } from "native-base";
import { View, StyleSheet, Text, Image } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'

type PokemonCharacteristicsProps = {
    weight?: number,
    height?: number, 
    moves?: string[],
    pokemonId?: number,
    handleInfoCardChange: (action: 'previous' | 'next') => void
}

export default function Stats({weight, height, moves, pokemonId, handleInfoCardChange}: PokemonCharacteristicsProps){

    return(
        <View style={styles.mainContainer}>
            <View style={styles.imgAndAboutContainer}>
                <Text style={styles.aboutText}>About</Text>
                {pokemonId && <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.toString()}.png`}} style={styles.pokemonImg}/>}
                <View style={styles.arrowsContainer}>
                    {pokemonId && pokemonId > 1 ? (<MaterialIcons name="arrow-back-ios" size={32} color={'#fff'} onPress={() => handleInfoCardChange('previous')} />) : (<Text></Text>)}
                    {pokemonId && <MaterialIcons name="arrow-forward-ios" size={32} color={'#fff'} onPress={() => handleInfoCardChange('next')}/>}                    
                </View> 

            </View>
            
            <View style={styles.characteristics}>
                <View style={styles.characteristicContainer}>
                    <View style={styles.putInLine}>
                        <FontAwesome5 name='weight-hanging' size={18}/>
                        <Text>{weight}</Text>
                    </View>
                    <Text style={styles.lowerCharacteristicText}>Weight</Text>
                </View>

                <Divider orientation="vertical" style={styles.divider}/>

                <View style={styles.characteristicContainer}>
                    <View style={styles.putInLine}>
                        <FontAwesome5 name='ruler-vertical' size={18}/>
                        <Text>{height}</Text>
                    </View>
                    <Text style={[styles.lowerCharacteristicText]}>Height</Text>
                </View>

                <Divider orientation="vertical" style={styles.divider}/>

                <View style={styles.characteristicContainer}>
                {moves && moves.map((move, index) => (<Text key={index} style={styles.move}>{move}</Text>))}
                    <Text style={styles.lowerCharacteristicText}>Moves</Text>
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgAndAboutContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    pokemonImg: {
        position: 'absolute',
        width: 80,
        height: 80,
        bottom: 20,
    },
    aboutText: {
        marginVertical: 12,
        fontSize: 18,
        fontWeight: 'bold'
    },
    characteristics: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 22,
        // position: 'relative'
    },
    characteristicContainer: {
        position: 'relative',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icon: {
        height: 100,
        width: 100,
        color: '#fff'
    },
    putInLine: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6
    },
    lowerCharacteristicText: {
        position: 'absolute',
        top: 46,
        minWidth: 52,
        textAlign: 'center'
    },
    arrowsContainer: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        bottom: 80,
        paddingHorizontal: 14
    },
    divider: {
        height: 50,
    },
    weight: {

    },
    height: {

    },
    moves: {

    },
    move: {
        fontWeight: '500',
    }
})