import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import TranscationCard from './TranscationCard';

const Lists = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '57%',
        backgroundColor: 'rgba(251, 252, 253, 1)',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        marginTop: 20,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Friend List</Text>
          <Text style={{fontSize: 18, color: 'rgba(103, 103, 103, 1)'}}>
            View all
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 27, marginLeft: 40}}>
          <Image
            source={require('../../../assets/faces/face1.png')}
            style={styles.face}
          />
          <Image
            source={require('../../../assets/faces/face2.png')}
            style={styles.face}
          />
          <Image
            source={require('../../../assets/faces/face3.png')}
            style={styles.face}
          />
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              marginRight: -10,
              borderColor: 'rgba(146, 196, 207, 1)',
              borderWidth: 4,
              borderStyle: 'dashed',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'rgba(146, 196, 207, 1)',
                fontSize: 35,
                fontWeight: '500',
              }}>
              +
            </Text>
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Transactions</Text>
          <Text
            style={{
              fontSize: 18,
              color: 'rgba(103, 103, 103, 1)',
              marginRight: 10,
            }}>
            View All
          </Text>
        </View>
        <ScrollView style={{height: '50%'}}>
          <TranscationCard
            name="Yamaoto"
            date="10 Aug 2020"
            money="120"
            sr="'../../../assets/faces/face1.png'"
          />
          <TranscationCard
            name="Miranda"
            date="13 may 2020"
            money="290"
            sr="'../../../assets/faces/face2.png'"
          />
          <TranscationCard
            name="sally"
            date="13 sep 2020"
            money="370"
            sr="'../../../assets/faces/face3.png'"
          />
          <TranscationCard
            name="jack"
            date="10 jan 2021"
            money="28"
            sr="'../../../assets/faces/face2.png'"
          />
          <TranscationCard
            name="drew"
            date="14 oct 2020"
            money="35"
            sr="'../../../assets/faces/face3.png'"
          />
          <TranscationCard
            name="sam"
            date="29 sep 2020"
            money="47"
            sr="'../../../assets/faces/face1.png'"
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  face: {width: 60, height: 60, borderRadius: 100, marginRight: -10},
});
export default Lists;
