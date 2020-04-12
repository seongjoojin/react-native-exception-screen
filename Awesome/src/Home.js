import React from 'react';
import {Platform, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RnTestExceptionHandler from 'rn-test-exception-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
});

const Home = () => {
  const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  const causeJSError = () => {
    throw new Error('THIS IS A CUSTOM UNHANDLED JS ERROR');
  };
  const causeNativeError = () => {
    RnTestExceptionHandler.raiseTestNativeError();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <TouchableOpacity onPress={causeJSError}>
        <Text>CAUSE JS ERROR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={causeNativeError}>
        <Text>CAUSE Native ERROR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
