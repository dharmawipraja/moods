/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTab from './src/navigation/RootNavigation';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
