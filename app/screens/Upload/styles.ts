import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: 'white',
    padding: 10,
  },
  itemView: {
    height: '100%',
    width: 150,
    margin: 10,
  },
  stretch: {
    width: '100%',
    height: 400,
    padding: 5,
    resizeMode: 'contain',
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});

export default styles;
