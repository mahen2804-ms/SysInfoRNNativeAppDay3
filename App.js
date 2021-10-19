import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ImageBackground,
  StatusBar,
} from 'react-native';

// import {fields, loginInitialValues} from './loginFields';
import {registerFields, registerInitialValues} from './registerFields';
import Form from './components/Form';
import FastImage from 'react-native-fast-image';
import Typography from './components/Typography';
import Login from './screens/Login';
import Register from './screens/Register';

// Layout

// Mounting

// Constructor -> define State/bind methods/
// GetDerivedStatFromProps
// render
// compnendDidMount

// Updating

// GetDerivedStatFromProps
// ShouldComponentUpdate
// render
//

const App = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    // const onClick = () => {};
    // document.addEventListener('click', onClick);
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });

    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    // componentWillUnmount
    return () => {
      // document.removeEventListener('click', onClick);
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  return (
    <>
      <StatusBar hidden />
      <ImageBackground
        source={require('./assets/images/banner/banner.jpg')}
        style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <FastImage
              source={{
                uri: 'https://reactjs.org/logo-og.png',
                priority: FastImage.priority.high,
              }}
              style={{
                height: isKeyboardVisible ? 50 : 100,
                width: isKeyboardVisible ? 50 : 100,
                borderRadius: 50,
              }}
              resizeMode="cover"
            />
          </View>
           {/*<Login />*/}
          <Register /> 
        </KeyboardAvoidingView>
      </ImageBackground>

      {/* <Button title="Login" />
      <TouchableHighlight underlayColor="black" onPress={() => {}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
            }}>
            {'login'.toUpperCase()}
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity activeOpacity={0.8}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
            }}>
            {'login'.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback onPress={() => {}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            backgroundColor: '#9fa8f5',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
            }}>
            {'login'.toUpperCase()}
          </Text>
        </View>
      </TouchableNativeFeedback>

      <Pressable
        android_ripple={{
          color: 'red',
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          backgroundColor: '#9fa8f5',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Login
        </Text>
      </Pressable> */}
    </>
  );
};

export default App;
