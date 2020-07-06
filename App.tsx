import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultLayout } from './src/components/templates/DefaultLayout';

export default function App() {
  return (
    <NavigationContainer>
      <DefaultLayout />
    </NavigationContainer>
  );
}
