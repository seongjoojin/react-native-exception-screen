/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import Home from './src/Home';
import ErrorModal from './src/ErrorModal';

const App = () => {
  const Stack = createStackNavigator();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const errorHandler = (error, isFatal) => {
    if (isFatal) {
      console.log(error.name, error.message);
      setShowErrorModal(true);
    } else {
      console.log(error); // So that we can see it in the ADB logs in case of Android if needed
    }
  };
  useEffect(() => {
    setJSExceptionHandler(errorHandler, true);
    setNativeExceptionHandler(errorString => {
      console.log('setNativeExceptionHandler');
    });
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        {showErrorModal && <ErrorModal visible={showErrorModal} />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
