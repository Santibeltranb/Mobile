import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const AlertButton = ({ message }) => {
  const showAlert = () => {
    Alert.alert('Alerta', message);
  };

  return (
    <View style={styles.container}>
      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 5,
  },
});

export default AlertButton;
