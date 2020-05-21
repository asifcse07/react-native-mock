import React from 'react';
import {SafeAreaView, Platform, StyleSheet, StatusBar} from 'react-native';

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop : Platform.OS === 'Android' ? StatusBar.currentHeight : 0,
        flex: 1,
        // paddingLeft: 10,
    }
})

export default Screen;
