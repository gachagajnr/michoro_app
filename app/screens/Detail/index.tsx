import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IHomeState } from 'app/models/reducers/initialize';
import * as initActions from 'app/store/actions/initializeActions';
import styles from './styles';

interface IState {
  initializeReducer: IHomeState;
}

const Detail: React.FC = (props) => {
  const arts = useSelector((state: IState) => state.initializeReducer.arts);

  const dispatch = useDispatch();
  const [art, setArt] = useState('');
  useEffect(() => {
    setArt(props.route.params.item.uri);
  }, []);

  console.log('AT HOME', props);

  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri: art.toString(),
        }}
      />
    </View>
  );
};

export default Detail;
