import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import {CameraScreen} from 'react-native-camera-kit';
import {addLogs} from '../store/redux/scanLogsReducer';

import base64 from 'react-native-base64';

import moment from 'moment';

function CameraQRScreen({navigation}) {
  // let {isPermitted} = route.params;

  const [openScanner, setOpenScanner] = useState(true);

  // let d = new Date();
  // var date = String(d.getDate()).padStart(2, 0); //Current Date
  // var month = String(d.getMonth() + 1).padStart(2, 0); //Current Month
  // var year = d.getFullYear(); //Current Year
  // var currentDate = date + '/' + month + '/' + year;
  // var qrFormat = `Rxefy${currentDate}` || `RXEFY${currentDate}`;

  // let formattedDate = Intl.DateTimeFormat().format(d);
  let formattedDate = moment().format('DD/MM/YYYY');
  // console.log(formattedDate);

  let qrFormat1 = `Rxefy${formattedDate}`;
  let qrFormat2 = `RXEFY${formattedDate}`;

  const dispatch = useDispatch();

  const onBottomButtonPressed = event => {
    // const images = JSON.stringify(event.captureImages);
    if (event.type === 'left') {
      navigation.navigate('HomeScreen');
    }
    // else if (event.type === 'right') {
    //   setIsPermitted(false);
    //   setCaptureImages(images);
    //   // return <Image source={{uri: uri}} />;
    // } else {
    //   Alert.alert(
    //     event.type,
    //     images,
    //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    //     {cancelable: true},
    //   );
    // }
  };

  const logQRScanTime = event => {
    // console.log(event.nativeEvent.codeStringValue);
    // var date = new Date().getDate(); //Current Date
    // var month = new Date().getMonth() + 1; //Current Month
    // var year = new Date().getFullYear(); //Current Year
    // var currentDate = date + '/' + month + '/' + year;

    let encryptedData = event.nativeEvent.codeStringValue;
    let decryptedData = base64.decode(encryptedData);
    if (qrFormat1 === decryptedData || qrFormat2 === decryptedData) {
      dispatch(
        addLogs({
          time: formattedDate,
        }),
      );
      setOpenScanner(false);
      //
      navigation.navigate('LogsScreen');
    } else {
      setOpenScanner(false);
      Alert.alert('Data Format does not match!', 'Try again later.', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('HomeScreen');
          },
        },
      ]);
    }

    //   setIsPermitted(false);
    //
    //
    //
    //

    console.log(`EncryptedData = ${encryptedData}`);
    console.log(`DecryptedData = ${JSON.stringify(decryptedData)}`);
    console.log(`qrFormat1 = ${JSON.stringify(qrFormat1)}`);
    console.log(`qrFormat2 = ${JSON.stringify(qrFormat2)}`);
    if (qrFormat1 === decryptedData || qrFormat2 === decryptedData) {
      console.log('Format matches');
    }
  };

  return (
    <View style={styles.container}>
      {openScanner && (
        <CameraScreen
          style={styles.container}
          actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
          onBottomButtonPressed={event => onBottomButtonPressed(event)}
          hideControls={false} // (default false) optional, hides camera controls
          showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
          // Barcode props
          scanBarcode={true}
          onReadCode={event => {
            logQRScanTime(event);
          }} // optional
          showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          laserColor="red" // (default red) optional, color of laser in scanner frame
          frameColor="white" // (default white) optional, color of border of scanner frame
        />
      )}
    </View>
  );
}

export default CameraQRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonImageStyle: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraFlipImageStyle: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
