import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../constants/colors';

const Title = () => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>
        Give It Backwards
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  titleView: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: Colors.pink,
    alignItems: 'center'
  },
  titleText: {
    color: Colors.darkGrey,
    fontSize: 35,
    textShadowOffset: {width: -2, height: 2},
    textShadowColor: Colors.grey,
    textShadowRadius: 10
  }
});

export default Title;
