import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    marginVertical: 6,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  cardContent: {
    marginVertical: 10,
    marginHorizontal: 14
  }
});

export default Card;
