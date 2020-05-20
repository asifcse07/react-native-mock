import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import color from '../config/color';

function Button({title, onPress, btnColor='primary'}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color[btnColor]}]} onPress={onPress}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
    text:{
      color:color.white,
      fontSize: 18,
      textTransform: 'uppercase',
      fontWeight: 'bold',
    }
});

export default Button;
