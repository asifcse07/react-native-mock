import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import color from '../config/color';
import {Icon } from 'react-native-elements';

function ListItemDelete({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon
                    name='trash-can'
                    type='material-community'
                    color={color.white}
                    size={35}
                />
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.danger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ListItemDelete;
