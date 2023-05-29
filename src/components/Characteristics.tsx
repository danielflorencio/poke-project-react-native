import { Divider } from "native-base";
import { View, StyleSheet, Text, Image } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import { PokeType } from "../types/pokeType";

type PokemonCharacteristicsProps = {
    weight?: number,
    height?: number, 
    moves?: string[],
    pokemonId?: number,
    handleInfoCardChange: (action: 'previous' | 'next') => void,
    types?: PokeType[],
}

export default function Stats({weight, height, moves, pokemonId, handleInfoCardChange, types}: PokemonCharacteristicsProps){

    return(
        <View style={styles.mainContainer}>
            <View style={styles.imgAndAboutContainer}>
                <View style={styles.pokemonTypes}>
                    {types && types.map((type, index) => (
                        <View style={styles.pokemonTypeView} key={index}>
                            <Text style={styles.pokemonTypeText}>{type.name}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.aboutText}>About</Text>
                {pokemonId && <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.toString()}.png`}} style={styles.pokemonImg}/>}
                <View style={styles.arrowsContainer}>
                    {pokemonId && pokemonId > 1 ? (<MaterialIcons id="left-arrow" name="arrow-back-ios" size={32} color={'#fff'} onPress={() => handleInfoCardChange('previous')} />) : (<Text></Text>)}
                    {pokemonId && <MaterialIcons id="right-arrow" name="arrow-forward-ios" size={32} color={'#fff'} onPress={() => handleInfoCardChange('next')}/>}                    
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
        position: 'relative',
        marginTop: 22
    },
    pokemonTypes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 22,
        flexWrap: 'wrap',
    },
    pokemonTypeView: {
        backgroundColor: '#50bfc3',
        paddingVertical: 3,
        paddingHorizontal: 9,
        borderRadius: 12,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonTypeText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    pokemonImg: {
        position: 'absolute',
        width: 80,
        height: 80,
        bottom: 90,
    },
    aboutText: {
        marginVertical: 12,
        marginTop: 22,
        fontSize: 18,
        fontWeight: 'bold'
    },
    characteristics: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 22,
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
        textAlign: 'center',
        fontSize: 14,
        color: '#718096'
    },
    arrowsContainer: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        bottom: 142,
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