import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../components/account/header/header';
import Profile from '../components/account/profile/profile';
import Options from '../components/account/options/options';
import {createStackNavigator} from '@react-navigation/stack';
import Qrcode from './Qrcode';

const Account = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header />
      <Profile />
      <Options navigation={navigation} />
    </SafeAreaView>
  );
};
function AccountStackScreen() {
  const AccountStack = createStackNavigator();
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Screen name="Account" component={Account} />
      <AccountStack.Screen name="Qrcode" component={Qrcode} />
    </AccountStack.Navigator>
  );
}

export default AccountStackScreen;
