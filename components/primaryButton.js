import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: '#cccccc'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    marginVertical: 2,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  // pressed for iOS
  pressed: {
    opacity: 0.75,
  },
});
