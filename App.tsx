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

import BottomTab from './src/Navigation/RootNavigation';
import { styles } from './App.styles';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
