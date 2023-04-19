import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logs from '../components/logsComponent';
import PrimaryButton from '../components/primaryButton';
import {useDispatch} from 'react-redux';
import {resetLogs} from '../store/redux/scanLogsReducer';

function LogsScreen({navigation}) {
  const dispatch = useDispatch();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.outerButtonContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => navigation.navigate('HomeScreen')}>
            Go to HomePage
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => {
              dispatch(resetLogs());
            }}>
            Clear Logs
          </PrimaryButton>
        </View>
      </View>
      <Logs />
    </View>
  );
}

export default LogsScreen;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
// });

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 10,
  },
  outerButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  buttonContainer: {
    // width: 200,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
  },
});
