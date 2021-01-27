import React from 'react';
import { View,Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
const SignUp: React.FC = () => {
  const goBack = () => NavigationService.goBack();
  const dispatch = useDispatch();
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onLogin = () => NavigationService.navigate('Login');

  return (
    <View style={styles.container}>
       <View style={styles.container}>
        <Formik
          initialValues={{ email: '', password: '',confirmpassword:'' }}
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
              <TextInput
                mode="outlined"
                label="Password"
                style={styles.email}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
               <TextInput
                mode="outlined"
                label="Confirm Password"
                style={styles.email}
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmpassword')}
                onBlur={handleBlur('confirmpassword')}
                value={values.password}
              />

              <Button
                style={styles.loginButton}
                mode="contained"
                onPress={handleSubmit}>
                Sign up
              </Button>
            </View>
          )}
        </Formik>
        
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
        <Text>or</Text>
        <Button
          mode="text"
          labelStyle={styles.labelStyle}
          onPress={onLogin}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default SignUp;
