import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import AppText from './AppText';
import ViewImageScreen from '../screens/ViewImageScreen';
import color from '../config/color';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress}
                                underlayColor={color.light}
            >
                <View style={styles.container}>
                    <Image style={styles.image} source={image}/>
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>

                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginBottom: 15,
    },
    image:{
        height: 70,
        width: 70,
        borderRadius: 25,
        marginRight: 10
    },
    title: {
        fontWeight: "600",
    },
    subTitle: {
        color: color.medium
    }
});

export default ListItem;
