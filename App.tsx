import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/contexts/auth';

export default function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar 
          backgroundColor="#F0F4FF"
          barStyle="dark-content"
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
