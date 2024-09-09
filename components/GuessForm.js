import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GuessForm = ({ correctAnswer }) => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (guess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage('¡Correcto!');
    } else {
      setMessage('Incorrecto, siga intentando.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Adivina la respuesta:</Text>
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={setGuess}
        placeholder="Escriba su adivinanza aquí"
      />
      <Button title="Enviar" onPress={handleGuess} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  message: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default GuessForm;
