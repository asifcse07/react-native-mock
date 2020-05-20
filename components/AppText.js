import React from 'react';
import {View, Text, Platform} from 'react-native';
import globalStyles from './Styles';

function AppText({children, style}) {
    return (
        <Text style={[globalStyles.text, style]}>{children}</Text>
    );
}

export default AppText;
