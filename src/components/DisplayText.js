import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../constants/colors';

const DisplayText = ({textValue}) => {
  return (
    <View style={styles.displayView}>
      <Text style={styles.displayText}>
        {textValue}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  displayView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mediumGrey
  },
  displayText: {
    fontSize: 20
  }
});

export default DisplayText;
