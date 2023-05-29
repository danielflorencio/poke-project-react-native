import { SafeAreaView, ScrollView, View, Text, StyleSheet, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import {AntDesign} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, Input } from 'native-base';
import PokemonList from "../../components/PokemonList";
import { Pokemon } from "../../types/pokemon";
import { useState } from "react";
export default function HomePage(){

  const [searchInputField, setSearchInputField] = useState<string>('')
  const [isSearchByName, setIsSearchByName] = useState<'id' | 'name'>('name')
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const handleSearchTypeChange = () => {
    if(isSearchByName === 'name'){
      setIsSearchByName('id')
    } else{
      setIsSearchByName('name')
    }
  }

  const searchPokemon = async (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {   
    e.preventDefault();
      (async () => {
        if(searchInputField !== ''){
          let searchParameters = searchInputField;
          if(isSearchByName === 'id'){
            let newSearchParameters;
            try{
              newSearchParameters = Number(searchParameters)
              searchParameters = String(newSearchParameters)
            }catch(error){
              console.log('ERROR: ', error)
            }
          }
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchParameters.toLowerCase()}`, {method: 'GET'})
          if(response.ok){
            const data = await response.json();
            setPokemonList([{name: data.name, id: data.id, pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id.toString()}.png`}])
          } else {
            setPokemonList([])
          }
        } else {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {method: 'GET'})
          const data = await response.json();

          const newPokemonsState: Pokemon[] = await Promise.all(data.results.map(async (pokemon: any) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();
      
            return {
              name: pokemon.name,
              id: pokemonData.id.toString(),
              pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id.toString()}.png`
            };
          }));
          setPokemonList([...newPokemonsState])
        }
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
          <Input value={searchInputField} onSubmitEditing={(e) => searchPokemon(e)} onChangeText={newText => setSearchInputField(newText)} variant="rounded" width={'90%'} placeholder={`Search by ${isSearchByName}`} InputLeftElement={<Icon as={<AntDesign name="search1" />} size={5} ml="2" color="muted.400" />} backgroundColor={'#fff'}/>
          <View style={styles.searchTypeContainer} onTouchEnd={handleSearchTypeChange}>
            <Text style={isSearchByName === 'name' ? ([styles.searchTypeHashtag, {color: '#4a5568'}]) : ([styles.searchTypeHashtag, {color: '#8bcae0'}])}>#</Text>
          </View>
          </View>      
        </View>
        <View style={styles.centralizeList}>
        <PokemonList pokemonList={pokemonList} setPokemonList={setPokemonList} />
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
    paddingTop: 8
  },
  innerContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  pokedexAndPokeBallContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  searchTypeContainer: {
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 32,
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTypeHashtag: {
    fontSize: 26,
  },
  centralizeList: {
    flex: 1, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});