import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import color from '../config/color';
import {Icon } from 'react-native-elements';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} >
        <Icon
            name='close'
            type='material-community'
            color='white'
            size={35}
        />
      </View>
      <View style={styles.deleteIcon}>
        <Icon
            name='trash-can-outline'
            type='material-community'
            color='white'
            size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require('../assets/furniture.jpg')}
        style={styles.images}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  images: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
