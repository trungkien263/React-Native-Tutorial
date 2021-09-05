import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function StackNavigationEg() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Details" component={Details} />
        </Drawer.Navigator>

        {/* <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontStyle: 'italic',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home Screen'}}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator> */}
      </View>
    </NavigationContainer>
  );
}
