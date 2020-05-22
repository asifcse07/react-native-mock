import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppText from '../components/AppText';
import ErrorMessages from '../components/ErrorMessages';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
    username : Yup.string().required().email().label('Email'),
    password : Yup.string().required().min(4).label('Password')
})

    function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo}/>
            <AppForm initialValues={{username: '', password: ''}}
                onSubmit={(values) => {console.log(values)}}
                validationSchema={validationSchema}
            >
                <>
                    <AppFormField
                        name="username"
                        icon="email"
                        placeholder='username'
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType='email-address'
                    />
                    <AppFormField
                        name="password"
                        icon="lock"
                        placeholder='password'
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType='numeric'
                        secureTextEntry
                    />
                    <SubmitButton title={'login'}/>
                </>
            </AppForm>
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
