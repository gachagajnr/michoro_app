import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as signupActions from 'app/store/actions/signupActions';

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
          initialValues={{
            username: 'pius',
            email: 'williampius17@gmail.com',
            password: 'muthomi@3A',
            // confirmpassword: '',
          }}
          onSubmit={(values) => {
            dispatch(
              signupActions.requestSignup(
                values.username,
                values.email,
                values.password,
              ),
            );
          }}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                mode="outlined"
                label="Username"
                style={styles.email}
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
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
              {/* <TextInput
                mode="outlined"
                label="Confirm Password"
                style={styles.email}
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmpassword')}
                onBlur={handleBlur('confirmpassword')}
                value={values.password}
              /> */}

              <Button
                style={styles.loginButton}
                mode="contained"
                dark={true}
                uppercase={false}
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
        <Button mode="text" labelStyle={styles.labelStyle} onPress={onLogin}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default SignUp;
