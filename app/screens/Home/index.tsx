import React, { useEffect, useState } from 'react';
import MasonryList from 'react-native-masonry-list';
import { Searchbar } from 'react-native-paper';
import { ScrollView, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IHomeState } from 'app/models/reducers/initialize';
import * as initActions from 'app/store/actions/initializeActions';
import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';

interface IState {
  initializeReducer: IHomeState;
}

const Home: React.FC = ({ navigation }) => {
  const arts = useSelector((state: IState) => state.initializeReducer.arts);

  const dispatch = useDispatch();

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
          images={arts.length > 0 ? arts : null}
          // imageContainerStyle={{ backgroundColor: '#000' }}
          onPressImage={(item: object, index: number) =>
            navigation.push('Detail', {
              item: item,
              _id: index,
              name: item.name,
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
          renderIndividualFooter={(item) => {
            return (
              <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
            );
          }}

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
