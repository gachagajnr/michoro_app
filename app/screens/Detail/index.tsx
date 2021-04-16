import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
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
  
  const [art, setArt] = useState({
    author: { firstnme: '', lastname: '' },
    keywords: [],
    materials: [],
    styles: [],
    subjects: [],
  });
  useEffect(() => {
    setArt(props.route.params.item);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.stretch}
          source={{
            uri: art.uri,
          }}
        />
        <Text>{art.name}</Text>
        <Text>{art.author.firstname}</Text>
        <Text>{art.author.lastname}</Text>
        <Text>Size: {art.size}</Text>
        <Text>Price: {art.price}</Text>
        <Text>Category: {art.category}</Text>
        <Text>Description: {art.description}</Text>
        <View>
          {art.keywords
            ? art.keywords.map((word) => {
                <Text>{word}</Text>;
              })
            : []}
        </View>
        <View>
          {art.styles
            ? art.styles.map((word) => {
                <Text>{word}</Text>;
              })
            : []}
        </View>
        <View>
          {art.subjects
            ? art.subjects.map((word) => {
                <Text>{word}</Text>;
              })
            : []}
        </View>
        <View>
          {art.materials
            ? art.materials.map((word) => {
                <Text>{word}</Text>;
              })
            : []}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
