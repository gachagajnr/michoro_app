import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import styles from './styles';

const Upload: React.FC = () => {
  useEffect(() => {
    // setArt(props.route.params.item);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Upload Art</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Upload;
