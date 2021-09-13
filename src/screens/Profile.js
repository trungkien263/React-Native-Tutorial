import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Avatar,
  Caption,
  Text,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={require('../assets/tzuyu-profile.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={styles.title}>Chou Tzuyu</Title>
            <Caption style={styles.caption}>@tzuyu</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          {/* <Image
            source={require('../assets/location.png')}
            style={{
              width: 20,
              height: 20,
              marginRight: 10,
              marginTop: 5,
            }}
          /> */}
          <Icon
            name="map-marker-radius"
            size={20}
            color="#666"
            style={{marginTop: 4, marginRight: 10}}
          />
          <Text style={{color: '#666'}}>Taiwan</Text>
        </View>
        <View style={styles.row}>
          {/* <Image
            source={require('../assets/location.png')}
            style={{
              width: 20,
              height: 20,
              marginRight: 10,
              marginTop: 5,
            }}
          /> */}
          <Icon
            name="phone"
            size={20}
            color="#666"
            style={{marginTop: 4, marginRight: 10}}
          />
          <Text style={{color: '#666'}}>+84-834872376</Text>
        </View>
        <View style={styles.row}>
          {/* <Image
            source={require('../assets/location.png')}
            style={{
              width: 20,
              height: 20,
              marginRight: 10,
              marginTop: 5,
            }}
          /> */}
          <Icon
            name="email"
            size={20}
            color="#666"
            style={{marginTop: 4, marginRight: 10}}
          />
          <Text style={{color: '#666'}}>tzuyu@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#ddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title style={styles.text}>$150</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={styles.text}>20</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Image
              source={require('../assets/location.png')}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                marginTop: 5,
              }}
            /> */}
            <Icon
              name="heart-outline"
              size={20}
              color="#ff6347"
              style={{marginTop: 4, marginRight: 10}}
            />
            <Text style={{color: '#666'}}>Your Favorites</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Image
              source={require('../assets/location.png')}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                marginTop: 5,
              }}
            /> */}
            <Icon
              name="credit-card"
              size={20}
              color="#ff6347"
              style={{marginTop: 4, marginRight: 10}}
            />
            <Text style={{color: '#666'}}>Payment</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Image
              source={require('../assets/location.png')}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                marginTop: 5,
              }}
            /> */}
            <Icon
              name="settings-outline"
              size={20}
              color="#ff6347"
              style={{marginTop: 4, marginRight: 10}}
            />
            <Text style={{color: '#666'}}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuItemText: {
    color: '#777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuWrapper: {
    marginTop: 10,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBoxWrapper: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 80,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
});
