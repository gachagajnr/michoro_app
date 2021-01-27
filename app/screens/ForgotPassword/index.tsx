import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
const ForgotPassword: React.FC = () => {
  const goBack = () => NavigationService.goBack();
  const onLogin = () => NavigationService.navigate('Login');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values) => console.log(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                mode="outlined"
                label="Email"
                style={styles.email}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <Button
                style={styles.loginButton}
                mode="contained"
                onPress={handleSubmit}>
                Recover Account
              </Button>
            </View>
          )}
        </Formik>
        <Text>or</Text>
        <Button mode="text" labelStyle={styles.labelStyle} onPress={onLogin}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default ForgotPassword;
