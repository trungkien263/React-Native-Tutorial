import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default function ProductInfo({route, navigation}) {
  const {data} = route.params;
  const [name, setName] = useState(data.name);
  const [description, setDesc] = useState(data.description);

  const updatedData = {description, name};

  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Updated Successfully !',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      50,
      200,
    );
  };

  const updateData = () => {
    fetch(
      `https://60f93d19ee56ef0017975ce5.mockapi.io/api/v1/products/${data.id}`,
      {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      },
    )
      .then(response => response.json())
      .then(data => {
        navigation.navigate({
          name: 'Details',
          params: {isUpdated: updatedData},
        });
        showToast();
      })
      .catch(error => {
        console.warn('Error:', error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginTop: 10}}>
        <Text style={{marginBottom: 5}}>Product's Name:</Text>
        <TextInput
          value={name}
          onChangeText={text => {
            setName(text);
          }}
          style={{
            borderWidth: 1,
            borderColor: 'orange',
            borderRadius: 8,
            padding: 10,
            width: 200,
          }}
        />
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{marginBottom: 5}}>Product's Description:</Text>
        <TextInput
          value={description}
          onChangeText={text => {
            setDesc(text);
          }}
          style={{
            borderWidth: 1,
            borderColor: 'orange',
            borderRadius: 8,
            padding: 10,
            width: 200,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={updateData}
        style={{
          marginTop: 20,
          backgroundColor: 'orange',
          padding: 10,
          width: 200,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}
