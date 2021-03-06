import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const FlatButton = ({ text, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
});

export default FlatButton;
