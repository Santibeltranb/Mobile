import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ThemeSwitcher = ({ onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePress = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    onThemeChange(newTheme);
  };

  return (
    <View style={styles.container}>
      <Button title={`Cambiar a ${isDarkMode ? 'modo claro' : 'modo oscuro'}`} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default ThemeSwitcher;
