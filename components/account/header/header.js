import React from 'react';
import {View, Text} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
      <View style={{padding: 7, borderRadius: 13}}>
        <SimpleLineIcons
          name="options-vertical"
          size={30}
          color="transparent"
        />
      </View>

      <Text style={{fontSize: 24, fontWeight: '700'}}>Wallet</Text>
      <View style={{backgroundColor: 'white', padding: 7, borderRadius: 13}}>
        <SimpleLineIcons
          name="options-vertical"
          size={30}
          color="rgba(64, 64, 64, 1)"
        />
      </View>
    </View>
  );
};

export default Header;
