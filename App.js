import React from 'react';
import {tw} from 'tailwind-react-native-classnames';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    
       <HomeScreen/>
 
    </NavigationContainer>
  );
};

export default App;
