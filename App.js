import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResources';

import SetUpNavigation from './navigation/SetUpNavigation';
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
          <Stack.Screen name="Home" component={SetUpNavigation}/>
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


