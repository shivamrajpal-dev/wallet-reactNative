import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {create} from 'react-test-renderer';

const Cards = ({
  color,
  BackgroundColor,
  cardNo,
  logo,
  chip,
  amount,
  Balance,
  cardWidth,
  cardheight,
}) => {
  return (
    <View
      style={{
        height: cardheight,
        width: cardWidth,
        backgroundColor: BackgroundColor,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          height: '25%',
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: 30,
        }}>
        <Text style={{color: color, fontSize: 18}}>{cardNo}</Text>
        <Text style={{color: color}}>{chip}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: color}}>{Balance}</Text>
          <Text style={{color: color, fontSize: 27, fontWeight: '700'}}>
            {amount}
          </Text>
        </View>
        <Text style={{color: 'white'}}>{logo}</Text>
      </View>
    </View>
  );
};

export default Cards;
