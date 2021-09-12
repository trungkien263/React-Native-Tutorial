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
import {useTheme} from 'react-native-paper';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
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

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontStyle: 'italic',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home Screen',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

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
