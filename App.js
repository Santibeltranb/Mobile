import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Greetings from './components/Greetings';
import UserDetails from './components/UserDetails';
import Task from './components/Task';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';
import ParentCounter from './components/ParentCounter';
import ImageGallery from './components/ImageGallery';
import Game from './components/Game';

export default function App() {
  const [registrationData, setRegistrationData] = useState(null);
  const [theme, setTheme] = useState('light');
  const [task] = useState({ title: 'Aprender React Native', completed: true });

  const handleRegister = (data) => {
    setRegistrationData(data);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const alertMessage = 'ALERTA, ALERTA!';

  const containerStyle = theme === 'dark' ? styles.containerDark : styles.containerLight;
  const textStyle = theme === 'dark' ? styles.textDark : styles.textLight;

  return (
    <View style={containerStyle}>
      <ThemeSwitcher onThemeChange={handleThemeChange} />
      <Greetings name="Santi" />
      <UserDetails name="Santiago" age={19} occupation="Estudiante" />
      <Task task={task} />
      <ToggleText />
      <DynamicForm />
      <ClickCounter />
      <RegistrationForm onRegister={handleRegister} />
      <AlertButton message={alertMessage} />
      <ParentCounter />
      <ImageGallery />
      <Game />

      {registrationData && (
        <View style={styles.resultContainer}>
          <Text style={textStyle}>Nombre: {registrationData.name}</Text>
          <Text style={textStyle}>Correo: {registrationData.email}</Text>
          <Text style={textStyle}>Contraseña: {registrationData.password}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textLight: {
    fontSize: 12,
    color: '#000',
  },
  textDark: {
    fontSize: 12,
    color: '#fff',
  },
  resultContainer: {
    marginTop: 20,
  },
});
