import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ChildCounter from './ChildCounter';

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <ChildCounter count={count} onIncrement={incrementCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ParentCounter;
