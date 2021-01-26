import React from 'react';
import { View } from 'react-native';
import { Button, List } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="contained" onPress={onLogout}>
        Logout
      </Button>
      <List.Item
        title="First Item"
        description="Item description"
        left={(props) => <List.Icon {...props} icon="folder" />}
      />
    </View>
  );
};

export default Home;
