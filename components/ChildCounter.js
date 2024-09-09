import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildCounter = ({ count, onIncrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={onIncrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 12,
    marginBottom: 10,
  },
});

export default ChildCounter;
