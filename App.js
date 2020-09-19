import React, {useEffect} from 'react';
import { Platform, StatusBar, StyleSheet, View, Button } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import SetUpNavigation from './navigation/SetUpNavigation';
import GameScreen from './screens/GameScreen';
import {globalStyles} from './styles/globalStyles';

const Stack = createStackNavigator();


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
          <View style={globalStyles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
            <NavigationContainer theme={DefaultTheme} linking={LinkingConfiguration}>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={SetUpNavigation}/>
                <Stack.Screen name="Game" component={GameScreen} />
              </Stack.Navigator>
            </NavigationContainer>



          </View>
        </SafeAreaProvider>


    );
  }
}
