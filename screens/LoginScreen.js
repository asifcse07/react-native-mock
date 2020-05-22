import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';

function LoginScreen(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo}/>
            <AppTextInput
                icon="email"
                placeholder='username'
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={text => setUsername(text)}
            />
            <AppTextInput
                icon="lock"
                placeholder='password'
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='numeric'
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />
            <Button title="Login" onPress={() => console.log(username, password)}/>
        </Screen>

    );
}

const styles= StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;
