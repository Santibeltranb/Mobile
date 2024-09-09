import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = ({ name, age, occupation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Edad: {age}</Text>
      <Text style={styles.text}>Ocupación: {occupation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 12,
    marginVertical: 5,
  },
});

export default UserDetails;
