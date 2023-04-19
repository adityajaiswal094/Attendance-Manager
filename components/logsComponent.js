import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

function Logs() {
  const scannedLog = useSelector(state => state.scanLogs.ids);
  // console.log(`scannedLog= ${scannedLog}`);

  let id = 1;

  // return (
  //   <View style={styles.rootContainer}>
  //     <Text style={styles.textStyle}>{scannedLog}</Text>
  //   </View>
  // );

  // console.log(JSON.stringify(scannedLog));
  // console.log(id);
  return (
    <View style={styles.rootContainer}>
      {scannedLog.map(scan => {
        // console.log(scan + ++id);
        return (
          <View key={scan + ++id}>
            <Text style={styles.textStyle}>{scan}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default Logs;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: '90%',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    marginBottom: 10,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize: 22,
    color: 'orange',
  },
});

// <View style={styles.rootContainer}>
// <ScrollView style={styles.scrollView}>
// {scannedLog.map((scan, i) => {
// return (
// <View key={i} style={styles.listItem}>
// <Text style={styles.textStyle}>{JSON.stringify(scan)}</Text>
// </View>
// );
// })}
// </ScrollView>
// </View>/
