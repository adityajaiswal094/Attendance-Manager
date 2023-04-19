import React from 'react';

import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import CameraQRScreen from './screens/CameraScreen';
import LogsScreen from './screens/LogsScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import {store} from './store/redux/store';

LogBox.ignoreLogs(['ReactImageView: Image source "null" doesn\'t exist']);

function App() {
  // const [captureImages, setCaptureImages] = useState([]);

  const Stack = createNativeStackNavigator();

  // const {store, persistor} = store();
  let persistor = persistStore(store);

  // const requestExternalWritePermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'External Write Storage Permission',
  //         message: 'App needs write permission',
  //         buttonPositive: 'Ok',
  //         buttonNegative: 'Cancel',
  //       },
  //     );
  //     // if permission is granted
  //     return granted === PermissionsAndroid.RESULTS.GRANTED;
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   return false;
  // };

  // const requestExternalReadPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //       {
  //         title: 'External Read Storage Permission',
  //         message: 'App needs read permission',
  //         buttonPositive: 'Ok',
  //         buttonNegative: 'Cancel',
  //       },
  //     );
  //     // if permission is granted
  //     return granted === PermissionsAndroid.RESULTS.GRANTED;
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   return false;
  // };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{title: 'QR Code Scanner'}}
            />
            <Stack.Screen
              name="CameraQRScreen"
              component={CameraQRScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LogsScreen"
              component={LogsScreen}
              options={{headerBackVisible: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
// });
