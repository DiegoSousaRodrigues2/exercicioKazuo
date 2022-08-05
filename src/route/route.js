import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import About from '../pages/about'
import Sinopse from '../pages/sinopse'
import React from 'react';
const Stack = createNativeStackNavigator();

export default function AppRoutes() {
 return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="About">
        <Stack.Screen  name="About" component={About} options={{headerShown: false}}/>
        <Stack.Screen  name="Sinopse" component={Sinopse} options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}