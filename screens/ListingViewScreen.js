import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import color from '../config/color';

function ListingViewScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/cric_1.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>What a great shot</AppText>
                <AppText style={styles.year}>1993</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/cric_logo.png")}
                        title={'Kalabagan'}
                        subTitle={'I am the club'}
                    />
                </View>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    detailsContainer:{
        padding: 20
    },
    image: {
       width: '100%',
       height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: '300',
    },
    userContainer:{
        marginVertical: 40,
    },
    year: {
        color: color.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical:10,
    },
});

export default ListingViewScreen;
