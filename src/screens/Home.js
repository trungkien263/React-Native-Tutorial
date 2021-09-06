import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Home({navigation}) {
  const {colors} = useTheme();
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        // backgroundColor="orange"
        // hidden={true}
      />
      <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}
