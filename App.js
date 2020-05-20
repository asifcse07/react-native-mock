/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import ListingViewScreen from './screens/ListingViewScreen';
import MessagesScreen from './screens/MessagesScreen';

export default function App() {
  const pressHandler = () => console.log('s');
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen />
    // <ListingViewScreen/>
      <MessagesScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
