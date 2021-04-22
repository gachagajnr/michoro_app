import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

import styles from './styles';

const Upload: React.FC = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    // setArt(props.route.params.item);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Upload Art</Text>
        <Button
          title="Take image"
          onPress={() =>
            ImagePicker.launchCamera(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              },
            )
          }
        />
        <Button
          title="Select image"
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              },
            )
          }
        />

        <View style={styles.response}>
          <Text>Res: {JSON.stringify(response)}</Text>
        </View>

        {response && (
          <View style={styles.image}>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: response.uri }}
            />
          </View>
        )}
      

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Upload;
