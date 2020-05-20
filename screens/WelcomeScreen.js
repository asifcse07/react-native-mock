import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import AppText from '../components/AppText';
import Button from '../components/Button';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.tagline}>Welcome to bellboy, ask for your need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'login'} />
        <Button title={'Register'} btnColor='secondary'/>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer:{
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20
  }
});

export default WelcomeScreen;
