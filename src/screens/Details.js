import React from 'react';
import {View, Text, Button} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

export default function Details({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Details Screen</Text>
      <View style={GlobalStyle.btn}>
        <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
      <View style={GlobalStyle.btn}>
        <Button
          title="Go to Detail again"
          onPress={() => {
            navigation.push('Details');
          }}
        />
      </View>
      <View style={GlobalStyle.btn}>
        <Button
          title="Go to back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={GlobalStyle.btn}>
        <Button
          title="Go to the first screen"
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View>
    </View>
  );
}
