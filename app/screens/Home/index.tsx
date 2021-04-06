import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, List, Searchbar } from 'react-native-paper';
import { Image, ScrollView, Text } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import * as initActions from 'app/store/actions/initializeActions';

import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(initActions.requestArts());
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };

  useEffect(() => {
    // async function getKind() {
    //   const { data } = await ForceApi.post(`/GetKindPensionController.php`);
    //   setpPensionKind(data.pension);
    // }
    //  dispatch(initActions.requestArts());
    // getKind();
    // console.log('IT LAUNCHED');
  }, []);

  return (
    <View style={styles.container}>
      <Searchbar mode="outlined" placeholder="Search " style={styles.search} />
      <Button icon="logout" mode="contained" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
