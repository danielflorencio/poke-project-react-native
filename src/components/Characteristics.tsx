import { Divider } from "native-base";
import { View, StyleSheet, Text, Image } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/MyStack";



type PokemonCharacteristicsProps = {
    weight?: number,
    height?: number, 
    moves?: string[],
    pokemonId?: number,
    handleInfoCardChange: (action: 'previous' | 'next') => void
}

export default function Stats({weight, height, moves, pokemonId, handleInfoCardChange}: PokemonCharacteristicsProps){

    const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.mainContainer}>
            <View style={styles.imgAndAboutContainer}>
                <Text style={styles.aboutText}>About</Text>
                {pokemonId && <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.toString()}.png`}} style={styles.pokemonImg}/>}
                <View style={styles.arrowsContainer}>
                    {pokemonId && pokemonId > 1 ? (<MaterialIcons name="arrow-back-ios" size={32} color={'#fff'} onPress={() => handleInfoCardChange('previous')} />) : (<Text></Text>)}
                    {pokemonId && <MaterialIcons name="arrow-forward-ios" size={32} color={'#fff'} onPress={() => handleInfoCardChange('next')}/>}                    
                </View> 

                {/* <Box position={'absolute'} bottom={'40px'}>
                    {pokemonId && <img width={100} height={100} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.toString()}.png`}></img>}
                </Box>
                <Box position={'absolute'} bottom={'80px'} display={'flex'} justifyContent={'space-between'} width={'100%'}>
                    {pokemonId && pokemonId > 1 ? (<ChevronLeftIcon width={'30px'} height={'30px'} cursor={'pointer'} color={'#ffffff'} onClick={() => handlePokemonChoice(Number(pokemonId) - 1)}/>) : (<Text></Text>)}
                    {pokemonId && <ChevronRightIcon width={'30px'} height={'30px'} cursor={'pointer'} color={'#ffffff'} onClick={() => handlePokemonChoice(Number(pokemonId) + 1)}/>}

                    {/* <ChevronLeftIcon width={'26x'} height={'26px'} cursor={'pointer'} color={'#ffffff'} onClick={() => handlePokemonChoice(pokemonId - 1)}/> */}
                    {/* <ChevronRightIcon width={'26px'} height={'26px'} cursor={'pointer'} color={'#ffffff'} onClick={() => handlePokemonChoice(pokemonId + 1)}/> */}
                {/* </Box> */}
            </View>
            
            <View style={styles.characteristics}>
                <View>
                    <View style={styles.putInLine}>
                        <FontAwesome5 name='weight-hanging'/>
                        <Text>{weight}</Text>
                    </View>
                    <Text>Weight</Text>
                </View>

                <Divider orientation="vertical" style={styles.divider}/>

                <View>
                    <View style={styles.putInLine}>
                        <FontAwesome5 name='ruler-vertical'/>
                        <Text>{height}</Text>
                    </View>
                    <Text>Height</Text>
                </View>

                <Divider orientation="vertical" style={styles.divider}/>

                <View>
                {moves && moves.map(move => (<Text style={styles.move}>{move}</Text>))}
                    <Text>Moves</Text>
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
        marginVertical: 12
    },
    characteristics: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 22
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
        alignItems: 'center'
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
        // fontSize: '',
        fontWeight: '500',
    }
})