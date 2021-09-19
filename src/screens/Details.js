import React, {useEffect, useState} from 'react';
import {
  Alert,
  RefreshControl,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';

export default function Details({navigation, route}) {
  const [product, setProduct] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

  const [isDeleted, setIsDeleted] = useState(false);

  const showCancelDelToast = () => {
    ToastAndroid.show('Delete cancelled !!!', ToastAndroid.LONG);
  };

  const showDelSuccessfulToast = () => {
    ToastAndroid.show('Delete Successful !!!', ToastAndroid.LONG);
  };

  const showRefreshingToast = () => {
    ToastAndroid.show('Refreshing...', ToastAndroid.SHORT);
  };

  const deleteItem = id => {
    fetch(`https://60f93d19ee56ef0017975ce5.mockapi.io/api/v1/products/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setIsDeleted(!isDeleted);
      showDelSuccessfulToast();
    });
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
  }, [route.params?.isUpdated, isDeleted]);

  const onRefresh = () => {
    setRefreshing(true);
    setIsDeleted(!isDeleted);
    showRefreshingToast();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

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

  const RenderHiddenItem = props => {
    const {data} = props;
    return (
      <View
        style={{
          flex: 1,
          width: '90%',
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginLeft: '5%',
        }}>
        {/* <Text>Left</Text> */}
        <TouchableOpacity
          onPress={() => {
            // deleteItem(data.id);
            Alert.alert('Alert', 'Are you sure you want to delete ?', [
              {
                text: 'No',
                onPress: () => {
                  showCancelDelToast();
                },
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => {
                  deleteItem(data.id);
                },
                style: 'cancel',
              },
            ]);
          }}
          style={{
            backgroundColor: 'red',
            height: 99,
            marginTop: 10,
            borderRadius: 8,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    // <ScrollView>
    //   {product && product.map(item => <Item data={item} key={item.id} />)}
    // </ScrollView>

    <SwipeListView
      data={product}
      renderItem={(data, rowMap) => <Item data={data.item} />}
      renderHiddenItem={(data, rowMap) => <RenderHiddenItem data={data.item} />}
      leftOpenValue={75}
      rightOpenValue={-75}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}
