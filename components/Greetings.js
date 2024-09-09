import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Greetings = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola, {props.name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  text: {
    fontSize: 14,
    color: 'green',
  },
});

export default Greetings;
