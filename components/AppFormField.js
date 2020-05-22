import React from 'react';
import {useFormikContext} from 'formik';
import AppTextInput from './AppTextInput';
import ErrorMessages from './ErrorMessages';

function AppFormField({name, ...otherProps}) {
    const {handleChange, setFieldTouched, errors, touched} = useFormikContext();
    return (
        <>
            <AppTextInput
                name={name}
                {...otherProps}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
            />
            <ErrorMessages error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;
