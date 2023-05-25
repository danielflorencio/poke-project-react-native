import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';
import InfoCard from '../components/InfoCard';
import InfoCardSimplified from '../components/InfoCardSimplified';
import HomePage from '../screens/home';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined,
  InfoCard: {
    pokemonId: number;
  }
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="InfoCard" component={InfoCardSimplified} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;