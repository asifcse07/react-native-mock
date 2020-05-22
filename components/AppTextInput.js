import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import color from '../config/color';
import Icons from './Icons';
import defaultStyles from '../config/defaultStyles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <Icon name={icon} type='material-community' size={20} color={color.medium} style={styles.icon} />}
            <TextInput {...otherProps} style={defaultStyles.text}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: color.light,
        borderRadius: 30,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
        marginVertical: 15
    }
});

export default AppTextInput;
