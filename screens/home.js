import React from 'react';
import Cards from '../components/home/cards/cards';
import {ScrollView, Dimensions, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/home/Header/Header';

import Lists from '../components/home/lists/lists';
const Home = () => {
  const windowWidth = Dimensions.get('screen').width;
  const CardWidth = (Dimensions.get('screen').width * 4.5) / 5;
  const icon = <Icon name="cc-visa" size={40} color="white" />;
  const icon2 = (
    <Icon2 name="ios-hardware-chip-outline" size={47} color="white" />
  );
  const apple = (
    <AntDesign name="apple-o" size={40} color="rgba(159, 159, 159, 1)" />
  );

  return (
    <>
      <SafeAreaView>
        <Header />
        <ScrollView
          style={{BackgroundColor: 'red', height: '35%'}}
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
              <Icon name="cc-visa" size={40} color="rgba(131, 164, 171, 1)" />
            }
            chip={
              <Icon2
                name="ios-hardware-chip-outline"
                size={47}
                color="rgba(131, 164, 171, 1)"
              />
            }
            cardWidth={CardWidth}
            cardheight={'100%'}
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
            cardheight={'100%'}
          />
          <Cards
            BackgroundColor={'rgba(210, 210, 210, 1)'}
            color={'rgba(159, 159, 159, 1)'}
            cardNo={apple}
            logo={icon2}
            amount={'Shivam Rajpal'}
            cardWidth={CardWidth}
            cardheight={'100%'}
          />
          <Cards
            BackgroundColor={'rgba(210, 174, 174, 1)'}
            color={'rgba(158, 121, 121, 1)'}
            cardNo={'1234 ****'}
            logo={
              <Icon name="cc-visa" size={40} color="rgba(158, 121, 121, 1)" />
            }
            chip={
              <Icon2
                name="ios-hardware-chip-outline"
                size={47}
                color="rgba(158, 121, 121, 1)"
              />
            }
            amount={'$784594.00'}
            Balance={'Balance'}
            cardWidth={CardWidth}
            cardheight={'100%'}
          />
        </ScrollView>
        <Lists />
      </SafeAreaView>
    </>
  );
};

export default Home;
