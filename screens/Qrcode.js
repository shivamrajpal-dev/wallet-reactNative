import React from 'react';
import {View, SafeAreaView, Button, Text, Pressable} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
const Qrcode = ({navigation}) => {
  var onBarCodeRead = (function () {
    var executed = false;
    return function () {
      if (!executed) {
        executed = true;
        alert('scaned');
      }
    };
  })();
  return (
    <View
      style={{flex: 1, backgroundColor: 'transparent', position: 'relative'}}>
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{flex: 1}}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        onBarCodeRead={onBarCodeRead}
        androidCameraPermissionOptions={{
          title: 'permission to use camera',
          message: 'camera is reuired to scan code',
          buttonPositive: 'ok',
          buttonNegative: 'cancle',
        }}>
        <SafeAreaView>
          <Pressable
            style={{
              backgroundColor: 'transparent',
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}
            onPress={() => navigation.navigate('Account')}>
            <Icon name="arrow-back" size={70} color="white" />
          </Pressable>
        </SafeAreaView>
      </RNCamera>
    </View>
  );
};

export default Qrcode;
