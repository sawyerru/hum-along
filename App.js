import React, {useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, View, Button, Text, TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResources';

// import SetUpNavigation from './navigation/SetUpNavigation';
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
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


