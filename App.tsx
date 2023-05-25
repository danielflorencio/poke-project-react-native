import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, Input } from 'native-base';
import { NativeBaseProvider } from 'native-base';
import { Pokemon } from './src/types/pokemon';
import PokemonList from './src/components/PokemonList';
import InfoCard from './src/components/InfoCard';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/routes/MyStack';

export default function App() {

  // const [searchInputField, setSearchInputField] = useState<string>('')
  // const [isSearchByName, setIsSearchByName] = useState<'id' | 'name'>('name')
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  // const [renderedComponent, setRenderedComponent] = useState(<PokemonList pokemonToSearch='default' pokemonList={pokemonList} setPokemonList={setPokemonList}/>)

  // // useEffect(() => { // Detects when the pokemonList has changed to force a rerender of the Child component.
  //   // setRenderedComponent(<PokemonList pokemonToSearch='default' pokemonList={pokemonList} setPokemonList={setPokemonList} handlePokemonChoice={handlePokemonChoice}/>)
  // // }, [pokemonList])

  // useEffect(() => {
  //   console.log('CURRENT POKEMONLIST VALUE: ', pokemonList)
  // }, [pokemonList])

  // const handlePokemonChoice = async (pokemonId: number) => {
  //   setRenderedComponent(<InfoCard pokemonId={pokemonId} handleReturnToInitialScreen={handleReturnToInitialScreen} handlePokemonChoice={handlePokemonChoice}/>)
  // }

  // const handleReturnToInitialScreen = () => {
  //   setRenderedComponent(<PokemonList pokemonToSearch='default' pokemonList={pokemonList} setPokemonList={setPokemonList} handlePokemonChoice={handlePokemonChoice}/>)
  // }

  return (
    // <NavigationContainer>
    // <NativeBaseProvider>
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.innerContainer}>
    //     <View style={styles.headerContainer}>
    //       <View style={styles.pokedexAndPokeBallContainer}>
    //         <MaterialCommunityIcons name="pokeball" size={46} color="#fff"/>
    //         <Text style={styles.headerTitle}>Pokédex</Text>
    //       </View>
    //       <View style={styles.searchOptionsContainer}>
    //       <Input variant="rounded" width={'90%'} placeholder="Round" InputLeftElement={<Icon as={<AntDesign name="search1" />} size={5} ml="2" color="muted.400" />} backgroundColor={'#fff'}/>
    //       </View>
    //     </View>


    //     {/* <View style={styles.mainPokemonsContainer}>
    //       {renderedComponent}
    //     </View>      */}
    //     <View style={styles.centralizeList}>
    //     <PokemonList pokemonToSearch='default' pokemonList={pokemonList} setPokemonList={setPokemonList} handlePokemonChoice={handlePokemonChoice}/>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    // </NativeBaseProvider>
    // </NavigationContainer>
    <NativeBaseProvider>
      <MyStack/>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#dc0a2d',
//     padding: 2,
//     borderColor: 'yellow',
//     borderWidth: 10
//   },
//   innerContainer: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: 'green',
//   },
//   headerContainer: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center', 
//     alignItems: 'center',
//     borderColor: 'orange',
//     borderWidth: 10
//   },
//   pokedexAndPokeBallContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '90%',
//     borderColor: 'pink', 
//     borderWidth: 2,
//     margin: 'auto'
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginLeft: 6   
//   },
//   searchOptionsContainer: {
//     width: '90%', 
//     borderWidth: 2,
//     borderColor: 'blue',
//   },
//   centralizeList: {
//     flex: 1, 
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   // mainPokemonsContainer: {
//   //   backgroundColor: '#fff',
//   //   width: '95%',
//   //   display: 'flex',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   flexDirection: 'column',
//   //   minHeight: 100, 
//   //   borderRadius: 6,
//   //   margin: 'auto'
//   // }
// });