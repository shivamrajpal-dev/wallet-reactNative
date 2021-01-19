import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20}}>Wallet</Text>
      <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
        <View style={{backgroundColor: 'white', padding: 7, borderRadius: 13}}>
          <Icon name="notifications" size={30} color="rgba(64, 64, 64, 1)" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
