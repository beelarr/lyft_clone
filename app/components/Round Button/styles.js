import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
  buttonContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    height: 85,
    width: 85,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
    right: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    backgroundColor: '#25BDE4',
  },
  button: {
    backgroundColor: '#25BDE4',
    shadowColor: '#25BDE4',
    shadowRadius: 0,
    shadowOpacity: 0,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  disabledState: {
    backgroundColor: '#D7D7D7',
  },
  activeState: {
    backgroundColor: '#61D4D5',
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
});
