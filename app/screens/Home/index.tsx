import React, { useEffect, useState } from 'react';
import MasonryList from 'react-native-masonry-list';
import { Searchbar } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IHomeState } from 'app/models/reducers/initialize';
import * as initActions from 'app/store/actions/initializeActions';
import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';

interface IState {
  initializeReducer: IHomeState;
}

const Home: React.FC = ({}) => {
  const arts = useSelector((state: IState) => state.initializeReducer.arts);

  const dispatch = useDispatch();
  const [columns, setColumns] = useState({
    columns: 2,
    statusBarPaddingTop: isIPhoneX() ? 30 : platform === 'ios' ? 20 : 0,
  });
  useEffect(() => {
    dispatch(initActions.requestArts());
  }, []);

  // console.log('AT HOME', arts);

  return (
    <View style={styles.container}>
      <Searchbar mode="outlined" placeholder="Search " style={styles.search} />
      {/* {arts.map((art) => { */}
      <ScrollView style={{ height: '100%', width: '100%' }}>
        <MasonryList
          // columns={columns}
          images={
            arts.length > 0
              ? arts.map((art) => {
                  return {
                    uri:
                      `https://michoroarts.s3.us-east-2.amazonaws.com/` +
                      art.art,
                    // id: item._id,
                  };
                })
              : null
          }
          // imageContainerStyle={{ backgroundColor: '#000' }}
          onPressImage={(item: object, index: number) =>
            NavigationService.navigate('Detail', {
              item: item,
              _id: index,
            })
          }
          contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row' }}
          listContainerStyle={
            {
              // justifyContent: 'center',
              // flexWrap: 'wrap',
              // flexDirection: 'row',
            }
          }

          // Version *2.14.0 update
          // onEndReached={() => {
          //     // add more images when scrolls reaches end
          // }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
