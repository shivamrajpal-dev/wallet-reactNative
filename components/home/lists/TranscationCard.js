import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
const TranscationCard = ({name, date, money, sr}) => {
  let src = sr;
  console.log(src);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../../assets/faces/face1.png')}
            style={styles.TransactionPhoto}
          />
          <View>
            <Text style={{color: 'black', fontWeight: '700', fontSize: 22}}>
              {name}
            </Text>
            <Text
              style={{
                color: 'rgba(103, 103, 103, 1)',
                fontWeight: '700',
                fontSize: 17,
              }}>
              {date}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            width: 90,
            height: 50,
          }}>
          <Text>${money}</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  TransactionPhoto: {width: 70, height: 70, borderRadius: 30, marginRight: -10},
});

export default TranscationCard;
