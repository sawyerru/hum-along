import React from 'react';
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResources';

import HomeScreen from "./screens/HomeScreen";
import GameScreen from './screens/GameScreen';
import {globalStyles} from './styles/globalStyles';

const Stack = createStackNavigator();


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title:'',
            headerStyle: {
              backgroundColor: '#fcf5c7'
            }

          }}/>
          <Stack.Screen name="Game" component={GameScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#fcf5c7'
            },
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  ellipse: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  optionsContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 5,
  }
})
