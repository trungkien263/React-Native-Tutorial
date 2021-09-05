import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Paragraph,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../utils/context';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const {signOut} = React.useContext(AuthContext);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://thongtinkpop.info/wp-content/uploads/2021/03/tzuyu-profile.jpg',
                }}
                size={50}
              />
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: 'column',
                  marginTop: -14,
                }}>
                <Title style={styles.title}>Chou Tzuyu</Title>
                <Caption style={styles.caption}>@tzuyu99</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({color, size}) => {
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={size}
                />;
              }}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              label="Profile"
              icon={({color, size}) => {
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />;
              }}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              label="Bookmark"
              icon={({color, size}) => {
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />;
              }}
              onPress={() => {
                props.navigation.navigate('Bookmark');
              }}
            />
            <DrawerItem
              label="Settings"
              icon={({color, size}) => {
                <MaterialCommunityIcons
                  name="settings-outline"
                  color={color}
                  size={size}
                />;
              }}
              onPress={() => {
                props.navigation.navigate('Setting');
              }}
            />
            <DrawerItem
              label="Support"
              icon={({color, size}) => {
                <MaterialCommunityIcons
                  name="account-check-outline"
                  color={color}
                  size={size}
                />;
              }}
              onPress={() => {
                props.navigation.navigate('Support');
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}>
          <DrawerItem
            label="Sign Out"
            icon={({color, size}) => {
              <MaterialCommunityIcons
                name="exit-to-app"
                color={color}
                size={size}
                onPress={() => {}}
              />;
            }}
          />
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
