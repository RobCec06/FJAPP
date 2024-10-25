import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);

  // Charger la police personnalisée
  const fetchFonts = () => {
    return Font.loadAsync({
      'custom-font': require('./assets/fonts/Starjedi.ttf'), // Remplace par ton chemin de police
    });
  };

  useEffect(() => {
    // Charger les polices au montage du composant
    fetchFonts().then(() => setFontLoaded(true)).catch(err => console.log(err));
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Si la connexion est réussie, rediriger vers l'accueil
        navigation.replace('Accueil');
      })
      .catch((error) => {
        Alert.alert('Erreur de connexion', 'Email ou mot de passe incorrect');
      });
  };

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#ccc"
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#ccc"
      />
      <Button title="Se connecter" onPress={handleLogin} color="#ff4d4d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    color: '#ffb84d',
    marginBottom: 20,
    fontFamily: 'custom-font', // Police Star Wars chargée
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#333',
    borderRadius: 8,
    color: '#fff',
  },
});

export default LoginScreen;
