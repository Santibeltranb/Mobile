import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
  const [correctAnswer] = useState('react');

  return (
    <View style={styles.container}>
      <GuessForm correctAnswer={correctAnswer} />
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

export default Game;
