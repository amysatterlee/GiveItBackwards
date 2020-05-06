import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Colors } from '../constants/colors';

const Input = ({ textValue, handleChangeText }) => {
  const onChangeText = (val) => {
    handleChangeText(val);
  }
  return (
    <View style={styles.inputView}>
      <TextInput style={styles.inputText} onChangeText={onChangeText}>
        {textValue}
      </TextInput>
    </View>
  )
};

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightPink,
    borderColor: Colors.black,
    borderStyle: 'solid',
    borderWidth: 10
  },
  inputText: {
    fontSize: 20
  }
});

export default Input;
