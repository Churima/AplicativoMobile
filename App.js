import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/login';
import Menu from './src/Menu';
import Menu2 from './src/Menu2';
import Menu3 from './src/Menu3';
import Cardio from './src/Cardio';
import Prancha from './src/Prancha';
import Polichinelo from './src/Polichinelo';
import Agachamento from './src/Agachamento';
import Timer from './src/Timer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={'login'}>
        <Stack.Screen name="login" component={login} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
        <Stack.Screen name="Menu2" component={Menu2} options={{headerShown: false}}/>
        <Stack.Screen name="Menu3" component={Menu3} options={{headerShown: false}}/>
        <Stack.Screen name="Cardio" component={Cardio} options={{headerShown: false}}/>
        <Stack.Screen name="Prancha" component={Prancha} options={{headerShown: false}}/>
        <Stack.Screen name="Polichinelo" component={Polichinelo} options={{headerShown: false}}/>
        <Stack.Screen name="Agachamento" component={Agachamento} options={{headerShown: false}}/>
        <Stack.Screen name="Timer" component={Timer} options={{headerShown: false}}/>
    </Stack.Navigator>     
    </NavigationContainer>
  );
}