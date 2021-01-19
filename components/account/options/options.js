import React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import Cards from '../../home/cards/cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const Options = ({navigation}) => {
  const windowWidth = Dimensions.get('screen').width;
  const CardWidth = (Dimensions.get('screen').width * 4.5) / 5;
  const cardheight = 140;
  const icon = <Icon name="cc-visa" size={30} color="white" />;
  const icon2 = (
    <Icon2 name="ios-hardware-chip-outline" size={37} color="white" />
  );
  const apple = (
    <AntDesign name="apple-o" size={30} color="rgba(159, 159, 159, 1)" />
  );

  const Option = ({IconBackground, icon, text}) => {
    return (
      <View style={styles.Option}>
        <View
          style={{
            width: CardWidth,
            height: 70,
            marginBottom: 20,
            backgroundColor: 'rgba(215, 215, 215, 0.15)',
            borderRadius: 17,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              alignItems: 'center',
              height: '100%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  padding: 8,
                  backgroundColor: IconBackground,
                  borderRadius: 14,
                }}>
                {icon}
              </View>
              <Text style={{fontSize: 20, fontWeight: '500', marginLeft: 15}}>
                {text}
              </Text>
            </View>
            <AntDesign name="right" size={30} color="rgba(215, 215, 215, 1)" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '60%',
        backgroundColor: 'rgba(251, 252, 253, 1)',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        marginTop: 50,
        position: 'relative',
      }}>
      <ScrollView
        style={{
          height: '36%',
          position: 'absolute',
          top: -40,
        }}
        contentContainerStyle={{
          height: '100%',
        }}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={windowWidth} //your element width
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}>
        <Cards
          BackgroundColor={'rgba(174, 204, 210, 1)'}
          color={'rgba(131, 164, 171, 1)'}
          cardNo={'1234 ****'}
          logo={
            <Icon name="cc-visa" size={30} color="rgba(131, 164, 171, 1)" />
          }
          chip={
            <Icon2
              name="ios-hardware-chip-outline"
              size={37}
              color="rgba(131, 164, 171, 1)"
            />
          }
          cardWidth={CardWidth}
          cardheight={cardheight}
          amount={'$937,468.00'}
          Balance={'Balance'}
        />
        <Cards
          BackgroundColor={'black'}
          color={'white'}
          cardNo={'1234 ****'}
          logo={icon}
          chip={icon2}
          amount={'$937,468.00'}
          Balance={'Balance'}
          cardWidth={CardWidth}
          cardheight={cardheight}
        />
        <Cards
          BackgroundColor={'rgba(210, 210, 210, 1)'}
          color={'rgba(159, 159, 159, 1)'}
          cardNo={apple}
          logo={icon2}
          amount={'Shivam Rajpal'}
          cardWidth={CardWidth}
          cardheight={cardheight}
        />
        <Cards
          BackgroundColor={'rgba(210, 174, 174, 1)'}
          color={'rgba(158, 121, 121, 1)'}
          cardNo={'1234 ****'}
          logo={
            <Icon name="cc-visa" size={30} color="rgba(158, 121, 121, 1)" />
          }
          chip={
            <Icon2
              name="ios-hardware-chip-outline"
              size={37}
              color="rgba(158, 121, 121, 1)"
            />
          }
          amount={'$784594.00'}
          Balance={'Balance'}
          cardWidth={CardWidth}
          cardheight={cardheight}
        />
      </ScrollView>

      <ScrollView
        style={{
          position: 'absolute',
          top: 120,
          width: '100%',
        }}
        contentContainerStyle={{alignItems: 'center'}}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Qrcode')}>
          <View>
            <Option
              IconBackground={'rgba(174, 204, 210, 1)'}
              icon={
                <AntDesign
                  name="qrcode"
                  size={27}
                  color="rgba(84, 122, 130, 1)"
                />
              }
              text="Qr Code"
              navigation={navigation}
            />
          </View>
        </TouchableWithoutFeedback>
        <Option
          IconBackground={'rgba(210, 174, 174, 1)'}
          icon={<Entypo name="mail" size={27} color="rgba(158, 121, 121, 1)" />}
          text="Email"
        />
        <Option
          IconBackground={'rgba(210, 210, 210, 1)'}
          icon={<Entypo name="lock" size={27} color="rgba(159, 159, 159, 1)" />}
          text="Password"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {},
});
export default Options;
