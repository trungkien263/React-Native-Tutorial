import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import MainTabScreen from './MainTab';
import Support from '../screens/Support';
import Setting from '../screens/Setting';
import Bookmark from '../screens/Bookmark';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function MaterialBottomTab() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Support" component={Support} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Bookmark" component={Bookmark} />
    </Drawer.Navigator>
  );
}
