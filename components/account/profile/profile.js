import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <Image
          source={require('../../../assets/faces/face1.png')}
          style={styles.profileImage}
        />
        <View style={styles.editProfile}>
          <FontAwesome5 name="edit" size={22} color="rgba(158, 169, 185, 1)" />
        </View>
      </View>
      <Text style={styles.fullName}>Jimmy jain</Text>
      <Text style={styles.userName}>@Jimmy45</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {position: 'relative'},
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  editProfile: {
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
    borderRadius: 14,
    bottom: 3,
    right: 0,
  },
  fullName: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userName: {
    fontSize: 17,
    color: 'rgba(130, 132, 135, 1)',
    marginTop: 7,
  },
});
export default Profile;
