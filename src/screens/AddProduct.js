import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default function AddProduct({navigation}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const newData = {name, description};

  const showToast = () => {
    ToastAndroid.showWithGravity(
      'Save Successful !!!',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  };

  const showErrorToast = () => {
    ToastAndroid.showWithGravity(
      'Name or Description Field Is Empty !!!',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  };

  const onSave = () => {
    fetch('https://60f93d19ee56ef0017975ce5.mockapi.io/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(data => {
        navigation.navigate({
          name: 'Details',
          params: {isUpdated: newData},
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
        <Text>Product Name</Text>
        <TextInput
          placeholder="Enter product name"
          style={styles.textInput}
          onChangeText={name => {
            setName(name);
          }}
          autoFocus={true}
          value={name}
        />
      </View>

      <View style={{marginTop: 10}}>
        <Text>Product Description</Text>
        <TextInput
          placeholder="Enter product description"
          style={styles.textInput}
          value={description}
          onChangeText={desc => {
            setDescription(desc);
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => {
          if (name === '' || description === '') {
            showErrorToast();
          } else {
            onSave();
          }
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    width: 200,
    paddingLeft: 20,
    marginTop: 10,
  },

  saveBtn: {
    borderRadius: 8,
    width: 200,
    marginTop: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});
