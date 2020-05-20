import {StyleSheet, Platform} from 'react-native';

const globalStyles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontFamily: Platform.OS === 'Android' ? 'Roboto' : 'Avenir',
    }
})

export default globalStyles;
