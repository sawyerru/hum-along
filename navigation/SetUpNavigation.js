import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import SetUpScreen from "../screens/SetUpScreen";
const SetUpStack = createStackNavigator();


export default function SetUpStackNavigation() {
    return(
        <SetUpStack.Navigator>
            <SetUpStack.Screen name='Start Game Options' component={SetUpScreen} />
            <SetUpStack.Screen name='Join Game' component={JoinGame} />
        </SetUpStack.Navigator>
    )
}