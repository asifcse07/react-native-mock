import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';

function LoginScreen(props) {
    return (
        <Screen>
            <Image source={require("../assets/logo.png")} style={styles.logo}/>
            <AppTextInput
                icon="email"
                placeholder='username'
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='email-address'
            />
            <AppTextInput
                icon="lock"
                placeholder='password'
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='numeric'
                secureTextEntry
            />
            <Button title="Login" onPress={() => console.log('asdads')}/>
        </Screen>

    );
}

const styles= StyleSheet.create({
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;
