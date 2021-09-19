import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

export default function Details({navigation, route}) {
  const [product, setProduct] = useState();
  //   const [isUpdated, setIsUpdated] = useState();

  const onUpdate = () => {
    alert('Clicked');
  };

  useEffect(() => {
    fetch('https://60f93d19ee56ef0017975ce5.mockapi.io/api/v1/products')
      .then(res => {
        const data = res.json();
        data.then(data => {
          setProduct(data);
        });
      })
      .catch(error => console.warn(error));
  }, [route.params?.isUpdated]);

  const Item = props => {
    const {data} = props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductInfo', {data});
        }}>
        <View
          style={{
            height: 100,
            backgroundColor: 'pink',
            marginTop: 10,
            width: '90%',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text>{data.name}</Text>
          <Text>{data.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      {product && product.map(item => <Item data={item} key={item.id} />)}
    </ScrollView>
  );
}
