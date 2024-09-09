import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={[styles.status, { color: task.completed ? 'green' : 'red' }]}>
        {task.completed ? 'Completada' : 'Pendiente'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
  },
});

export default Task;
