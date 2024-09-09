import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false); 

  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <View style={styles.container}>
      <Button title={isVisible ? 'Ocultar Texto' : 'Mostrar Texto'} onPress={toggleVisibility} />
      {isVisible && <Text style={styles.text}>Has utilizado el botón</Text>}
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

export default ToggleText;
