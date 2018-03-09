import EStyleSheet from 'react-native-extended-stylesheet';
import  { Dimensions }  from 'react-native';

const imageWidth = Dimensions.get('window').width ;
const imageHeight = Dimensions.get('window').height / 2;




export default EStyleSheet.create({
	$largeContainerWidth: imageWidth,
	$largeContainerHeight: imageHeight,


	container:{
		alignItems: 'center',

	},
	containerImage: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '$largeContainerWidth',
		height: '$largeContainerHeight',

	},
	text: {
		fontWeight: '400',
		fontSize: 48,
		letterSpacing: -0.2,
		marginTop: 15,
		color: '$logoTextColor',

	},
});
