import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const DynamicForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState(''); 

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escriba algo..."
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <Button title="Enviar" onPress={handleSubmit} />

      {submittedValue ? (
        <Text style={styles.text}>Texto ingresado: {submittedValue}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default DynamicForm;
