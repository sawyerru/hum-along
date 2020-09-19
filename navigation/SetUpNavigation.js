import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import SetUpScreen from "../screens/SetUpScreen";
import JoinGameScreen from "../screens/JoinGameScreen";
import HomeScreen from "../screens/HomeScreen";
const SetUpStack = createStackNavigator();


export default function SetUpStackNavigation() {
    return(
        <SetUpStack.Navigator>
            <SetUpStack.Screen name='Home' component={HomeScreen} />
            <SetUpStack.Screen name='Start Game Options' component={SetUpScreen} />
            <SetUpStack.Screen name='Join Game' component={JoinGameScreen} />
        </SetUpStack.Navigator>
    )
}