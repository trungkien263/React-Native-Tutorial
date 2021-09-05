import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useReducer} from 'react';
import {ActivityIndicator, View} from 'react-native';
import MaterialBottomTab from './src/components/MaterialBottomTab';
import RootStackScreen from './src/components/RootStackScreen';
import {AuthContext} from './src/utils/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  //   const [isLoading, setIsLoading] = React.useState(true);
  //   const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN': // check user previous login to app or not
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        // setUserToken('sdklf');
        // setIsLoading(false);
        let userToken;
        userToken = null;
        if (userName === 'user' && password === 'pass') {
          try {
            userToken = 'aslkdfh';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('sdklf');
        // setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      //   setIsLoading(false);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          {loginState.userToken !== null ? (
            <MaterialBottomTab />
          ) : (
            <RootStackScreen />
          )}
        </View>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
