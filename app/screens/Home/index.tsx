import React from 'react';
import { View } from 'react-native';
import { Button, List, Searchbar } from 'react-native-paper';
import { Image, ScrollView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
  return (
    <View style={styles.container}>
      <Searchbar mode="outlined" placeholder="Search " style={styles.search} />
      {/* <Button icon="logout" mode="contained" onPress={onLogout}>
        Logout
      </Button> */}
    </View>
  );
};

export default Home;
