import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onSignup = () => NavigationService.navigate('SignUp');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: '', password: '' }}
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

              <Button
                style={styles.loginButton}
                mode="contained"
                dark={true}
                uppercase={false}
                onPress={handleSubmit}>
                Login
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
        <Button mode="text" labelStyle={styles.labelStyle} onPress={onSignup}>
          Sign up
        </Button>
      </View>
    </View>
  );
};

export default Login;
