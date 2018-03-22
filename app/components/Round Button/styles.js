import EStyleSheet from 'react-native-extended-stylesheet';

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
    height: 82,
    width: 82,
    backgroundColor: '#25BDE4',
    borderRadius: 40,
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
