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
  Image, ImageComponent,
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
import Icons from './components/Icons';
import Screen from './components/Screen';
import ListItem from './components/ListItem';

export default function App() {
  const pressHandler = () => console.log('s');
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen />
    // <ListingViewScreen/>
    //   <MessagesScreen/>
      <Screen>
        <ListItem
            title={'my title'}
            ImageComponent={<Icons name={'email'}/>}
        />
        {/*<Icons*/}
        {/*    name={'email'}*/}
        {/*    size={100}*/}
        {/*    backgroundColor={'red'}*/}
        {/*    iconColor={'white'}*/}
        {/*/>*/}
      </Screen>

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
