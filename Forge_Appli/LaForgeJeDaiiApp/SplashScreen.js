import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [logoOpacity] = useState(new Animated.Value(0));
  const [logoScale] = useState(new Animated.Value(0.8));

  useEffect(() => {
    // Animation de l'opacité et du scale (zoom)
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Après l'animation, rediriger vers l'écran d'accueil
      setTimeout(() => {
        navigation.replace('Accueil');
      }, 1000);  // Temps avant de passer à l'accueil
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/logo_japan_forge.png')}
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Fond noir
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
