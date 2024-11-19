import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screen/splash-screen';
import LoginScreen from './screen/login-screen';
import HomeTabs from './screen/home-tabs';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
