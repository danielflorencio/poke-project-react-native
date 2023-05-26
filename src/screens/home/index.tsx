import { SafeAreaView, ScrollView, View, Text, StyleSheet, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import {AntDesign} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, Input } from 'native-base';
import PokemonList from "../../components/PokemonList";
import { Pokemon } from "../../types/pokemon";
import { useEffect, useState } from "react";
export default function HomePage(){

  const [searchInputField, setSearchInputField] = useState<string>('')
  const [isSearchByName, setIsSearchByName] = useState<'id' | 'name'>('name')
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);


  const searchPokemon = async (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {   
    e.preventDefault();
      (async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInputField.toLowerCase()}`, {method: 'GET'})
        const data = await response.json();
        
        setPokemonList([{name: data.name, id: data.id, pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id.toString()}.png`}])
      })();      
  }


  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.pokedexAndPokeBallContainer}>
            <MaterialCommunityIcons name="pokeball" size={46} color="#fff"/>
            <Text style={styles.headerTitle}>Pokédex</Text>
          </View>
          <View style={styles.searchOptionsContainer}>
          <Input value={searchInputField} onSubmitEditing={(e) => searchPokemon(e)} onChangeText={newText => setSearchInputField(newText)}variant="rounded" width={'90%'} placeholder="Round" InputLeftElement={<Icon as={<AntDesign name="search1" />} size={5} ml="2" color="muted.400" />} backgroundColor={'#fff'}/>
          </View>
        </View>
        <View style={styles.centralizeList}>
        <PokemonList pokemonToSearch='default' pokemonList={pokemonList} setPokemonList={setPokemonList} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dc0a2d',
      padding: 2,
      borderColor: 'yellow',
      borderWidth: 10
    },
    innerContainer: {
      flex: 1,
      borderWidth: 2,
      borderColor: 'green',
    },
    headerContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      borderColor: 'orange',
      borderWidth: 10
    },
    pokedexAndPokeBallContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
      borderColor: 'pink', 
      borderWidth: 2,
      margin: 'auto'
    },
    headerTitle: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 6   
    },
    searchOptionsContainer: {
      width: '90%', 
      borderWidth: 2,
      borderColor: 'blue',
    },
    centralizeList: {
      flex: 1, 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    // mainPokemonsContainer: {
    //   backgroundColor: '#fff',
    //   width: '95%',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   flexDirection: 'column',
    //   minHeight: 100, 
    //   borderRadius: 6,
    //   margin: 'auto'
    // }
  });