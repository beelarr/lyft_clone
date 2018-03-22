import React, { Component } from 'react';
import { Button, List, ListItem } from 'react-native-elements';
import { Dimensions, View } from 'react-native';
import list from '../../data/Services';

const { width, height } = Dimensions.get('window');

class Services extends Component {
  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {list.map((listItem, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: listItem.avatar_url }}
              key={i}
              title={listItem.name}
              subtitle={listItem.subtitle}
            />
          ))}
        </List>
        <Button
          title="Confirm Service"
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
