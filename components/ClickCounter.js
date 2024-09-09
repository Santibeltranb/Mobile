import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Número de clics: {count}</Text>
      <Button title="Presióname" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default ClickCounter;
