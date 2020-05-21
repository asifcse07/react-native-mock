import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight, ImageComponent} from 'react-native';
import AppText from './AppText';
import ViewImageScreen from '../screens/ViewImageScreen';
import color from '../config/color';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress}
                                underlayColor={color.light}
            >
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image:{
        height: 70,
        width: 70,
        borderRadius: 25,
    },
    title: {
        fontWeight: "600",
    },
    subTitle: {
        color: color.medium
    }
});

export default ListItem;
