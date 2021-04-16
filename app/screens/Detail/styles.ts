import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // flexDirection: 'row',
    // backgroundColor: '#000',
  },
  search: {
    margin: 10,
  },
  itemView: {
    height: 150,
    width: 150,
    margin: 10,
    // maxHeight: 100,
    // maxWidth: 100,
  },
  stretch: {
    width: '90%',
    height: '70%',
    padding: 10,
    // resizeMode: 'stretch',
  },
});

export default styles;
