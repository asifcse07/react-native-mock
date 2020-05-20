import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from './AppText';
import ViewImageScreen from '../screens/ViewImageScreen';
import color from '../config/color';

function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
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
