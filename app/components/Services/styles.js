import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
  title: {
    fontWeight: '900',
    color: '#371B92',
  },
  button: {
    backgroundColor: 'white',
    width: width / 1.75,
    height: height / 15,
    borderColor: '#371B92',
    borderWidth: 2,
    borderRadius: 25,
  },
  buttonContainer: {
    marginTop: 20,
  },
	listContainer: {
    marginBottom: 20
  }
});
