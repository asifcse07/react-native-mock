import React from 'react';
import {SafeAreaView, Platform, StyleSheet, StatusBar} from 'react-native';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop : Platform.OS === 'Android' ? StatusBar.currentHeight : 0,
        flex: 1,
    }
})

export default Screen;
