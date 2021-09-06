import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'react-native-paper';

import {AuthContext} from '../utils/context';
import Users from '../models/users';
import {color} from 'react-native-reanimated';

export default function SignInScreen({navigation}) {
  const {colors} = useTheme();
  const [data, setData] = useState({
    userName: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = value => {
    if (value.trim().length >= 4) {
      setData({
        ...data,
        userName: value,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        userName: value,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = value => {
    if (value.trim().length >= 8) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName === item.username && password === item.password;
    });

    if (data.userName.length === 0 || data.password.length === 0) {
      Alert.alert('Wrong input!', 'Username or password can not be empty!', [
        {text: 'Okay'},
      ]);
      return;
    }

    if (foundUser.length === 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect!', [
        {text: 'Okay'},
      ]);
      return;
    }

    signIn(foundUser);
  };

  const handleValidUser = value => {
    if (value.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={[styles.footer, {backgroundColor: colors.background}]}>
        <Text style={[styles.text_footer, {color: colors.text}]}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666"
            style={[styles.textInput, {color: colors.text}]}
            autoCapitalize="none"
            onChangeText={value => textInputChange(value)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)} // onEndEditing doesnt provide value as onChangeText so you have to use e.nativeEvent.text
          />
          {data.check_textInputChange ? (
            <Feather name="check-circle" color="green" size={20} />
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Text style={styles.errorMsg}>
            Username must be 4 characters long.
          </Text>
        )}

        <Text style={[styles.text_footer, {marginTop: 35, color: colors.text}]}>
          Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your password"
            placeholderTextColor="#666"
            style={[styles.textInput, {color: colors.text}]}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry}
            onChangeText={value => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye" color="grey" size={20} />
            ) : (
              <Feather name="eye-off" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Text style={styles.errorMsg}>
            Password must be 8 characters long.
          </Text>
        )}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.userName, data.password);
            }}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign in</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text style={[styles.textSign, {color: '#009387'}]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
