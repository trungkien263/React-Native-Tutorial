import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function EditProfile() {
  const {colors} = useTheme();

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        renderContent={renderInner}
        renderHeader={renderHeader}
        snapPoints={[330, 0]}
        initialSnap={1}
        callbackNode={fall}
        enableGestureInteraction={true}
        enabledContentTapInteraction={false}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.3, Animated.multiply(fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={require('../assets/tzuyu-profile.jpg')}
                style={{
                  width: 100,
                  height: 100,
                }}
                borderRadius={15}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Chou Tzuyu
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={colors.text}
            style={{marginTop: 3}}
            size={20}
          />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666"
            style={[
              styles.textInput,
              {
                backgroundColor: colors.background,
                color: colors.text,
              },
            ]}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={colors.text}
            style={{marginTop: 3}}
            size={20}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666"
            style={[
              styles.textInput,
              {
                backgroundColor: colors.background,
                color: colors.text,
              },
            ]}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <Feather
            name="phone"
            color={colors.text}
            style={{marginTop: 3}}
            size={20}
          />
          <TextInput
            placeholder="Phone"
            keyboardType="number-pad"
            placeholderTextColor="#666"
            style={[
              styles.textInput,
              {
                backgroundColor: colors.background,
                color: colors.text,
              },
            ]}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome
            name="envelope-o"
            color={colors.text}
            style={{marginTop: 3}}
            size={20}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#666"
            style={[
              styles.textInput,
              {
                backgroundColor: colors.background,
                color: colors.text,
              },
            ]}
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  // header
  header: {
    backgroundColor: '#fff',
    // shadowColor: '#fff',
    // shadowOffset: {width: -100, height: -10},
    // shadowRadius: 2,
    // shadowOpacity: 0.4,
    // elevation: 3,
    borderTopWidth: 3,
    borderTopColor: '#ddd',

    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },

  panelTitle: {
    fontSize: 20,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
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
    backgroundColor: '#fff',
  },
});
