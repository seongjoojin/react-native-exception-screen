import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
} from 'react-native';
import RNRestart from 'react-native-restart';

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ErrorModal = ({visible}) => {
  return (
    <Modal style={styles.modal} visible={visible}>
      <SafeAreaView style={styles.container}>
        <Text>에러 페이지</Text>
        <TouchableOpacity onPress={() => RNRestart.Restart()}>
          <Text>앱 재시작</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default ErrorModal;
