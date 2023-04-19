import React, {useState} from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';

import moment from 'moment';

import PrimaryButton from '../components/primaryButton';

function HomeScreen({navigation, route}) {
  const [isPermitted, setIsPermitted] = useState(false);

  let startTime1 = '09:00:00';
  let startTime2 = '11:00:00';
  let endTime1 = '17:00:00';
  let endTime2 = '19:00:00';
  let currentTime = moment().format('HH:MM:SS');
  // console.log(moment().format('HH:MM:SS'));

  function cameraOnPressHandler() {
    if (
      (currentTime >= startTime1 && currentTime <= startTime2) ||
      (currentTime >= endTime1 && currentTime <= endTime2)
    ) {
      openCamera();
    } else {
      Alert.alert('Camera Access Unavailable', 'Try again later.', [
        {
          text: 'OK',
          onPress: () => {
            return;
          },
        },
      ]);
    }
  }
  function logsOnPressHandler() {
    navigation.navigate('LogsScreen');
  }

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        },
      );
      // if permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
      // if (granted !== PermissionsAndroid.PERMISSIONS.GRANTED) {
      //   Linking.openSettings();
      // }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const openCamera = async () => {
    if (Platform.OS === 'android') {
      if (await requestCameraPermission()) {
        navigation.navigate('CameraQRScreen', {isPermitted});
        setIsPermitted(true);
      } else {
        Alert.alert('Camera permission denied');
      }
    } else {
      setIsPermitted(true);
    }
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.rootContainer}>
        <PrimaryButton onPress={cameraOnPressHandler}>
          Open Camera
        </PrimaryButton>
        <PrimaryButton onPress={logsOnPressHandler}>Open Logs</PrimaryButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 12,
  },
  headingStyle: {
    marginTop: 50,
    fontSize: 30,
    color: 'black',
  },
  textStyle: {
    fontSize: 22,
    padding: 10,
    color: 'black',
  },
});

export default HomeScreen;

/*
<View style={styles.rootContainer}>
      <Text>Aditya</Text>
    </View>
*/
