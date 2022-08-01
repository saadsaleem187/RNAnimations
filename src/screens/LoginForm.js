import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';

const {height} = Dimensions.get('window');

const LoginForm = ({navigation}) => {
  const coverHeight = useRef(new Animated.Value(height - 80)).current;
  const formOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(coverHeight, {
        toValue: height / 3,
        duration: 600,
        useNativeDriver: false,
      }),
      Animated.timing(formOpacity, {
        toValue: 1,
        duration: 600,
        delay: 600,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: coverHeight,
          backgroundColor: '#66b2ff',
          justifyContent: 'center',
        }}>
        <Text style={styles.title}>Hi, Welcome to {'\n'} Your App</Text>
      </Animated.View>
      <View style={styles.formView}>
        <Text style={styles.formTitle}>Login To Your Account</Text>
        <Animated.View style={{opacity: formOpacity}}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#fafafa"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#fafafa"
            style={styles.textInput}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btn}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnText}>Log in</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
  },
  formView: {
    flex: 1,
    padding: 25,
    backgroundColor: '#282828',
  },
  formTitle: {
    height: 50,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    color: '#fafafa',
  },
  btn: {
    margin: 10,
    padding: 10,
    backgroundColor: '#66b2ff',
    borderRadius: 5,
    marginTop: 30,
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginForm;
