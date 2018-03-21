import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get('window');

// This should be come a flat list of services
class Services extends Component {
  render(props) {
    return (
      <View>
        <Button
          title="Services"
          titleStyle={{ fontWeight: '900', color: '#371B92' }}
          buttonStyle={{
            backgroundColor: 'white',
            width: width / 1.75,
            height: height / 15,
            borderColor: '#371B92',
            borderWidth: 2,
            borderRadius: 25,
          }}
          containerStyle={{ marginTop: 20 }}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

export default Services;
