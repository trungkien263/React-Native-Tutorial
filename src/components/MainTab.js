// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import {Avatar, useTheme} from 'react-native-paper';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FF6347',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: 'orange',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="card-account-details"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'green',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: 'pink',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-checkbox"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          // shadowColor: '#fff', // ios
          elevation: 0, // android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          alignSelf: 'auto',
          fontSize: 18,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home Screen',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="menu"
                size={30}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <Icon.Button
                name="ios-search"
                size={30}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{marginTop: 8, marginRight: 10}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={require('../assets/tzuyu.jpg')}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'orange',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontStyle: 'italic',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details Screen',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="orange"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          //   shadowColor: '#fff', // only in ios
          elevation: 0, // android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={30}
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="md-person-circle-outline"
              size={30}
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfile}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;
