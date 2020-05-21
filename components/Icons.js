import React from 'react';
import {View} from 'react-native';
import {Icon } from 'react-native-elements';
import color from '../config/color';

function Icons({
    name, size = 40, backgroundColor = '#000', iconColor = '#fff'
               }) {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size/2,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Icon
                name={name}
                type='material-community'
                color={iconColor}
                size={size * 0.5}
            />
        </View>
    );
}

export default Icons;
