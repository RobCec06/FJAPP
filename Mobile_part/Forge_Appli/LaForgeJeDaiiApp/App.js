import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useEffect, useState } from 'react';

// Charger les polices personnalisées
const fetchFonts = () => {
  return Font.loadAsync({
    'custom-font': require('./assets/fonts/Starjedi.ttf'),
  });
};

// SplashScreen Component
function CustomSplashScreen({ navigation }) {
  const [logoOpacity] = useState(new Animated.Value(0));
  const [logoScale] = useState(new Animated.Value(0.8));

  useEffect(() => {
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
      setTimeout(() => {
        navigation.replace('Accueil');  // Diriger vers l'écran d'accueil
      }, 1000);
    });
  }, []);

  return (
    <View style={styles.splashContainer}>
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
}

// HomeTabs Component (Barre de navigation)
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = 'home-outline';
          } else if (route.name === 'Profil') {
            iconName = 'person-outline';
          } else if (route.name === 'Agenda') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Videos') {
            iconName = 'videocam-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#ff4d4d',
        },
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'custom-font',
          fontSize: 20,
        },
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Videos" component={VideosScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/a6/32/f1/a632f1fe48a8a76efd3b61d379cf56fd.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Animated.Image
          style={[styles.logo, { transform: [{ rotate: spin }] }]}
          source={require('./assets/logo_japan_forge.png')}
        />
        <Text style={[styles.title, { fontFamily: 'custom-font' }]}>Forge Je'Daii</Text>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Profil')}
          >
            <Text style={styles.buttonText}>Mon Profil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Agenda')}
          >
            <Text style={styles.buttonText}>Agenda</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Videos')}
          >
            <Text style={styles.buttonText}>Vidéos des cours</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

function ProfilScreen() {
  return (
    <View style={styles.container}>
      <Text>Mon Profil</Text>
    </View>
  );
}

function AgendaScreen() {
  return (
    <View style={styles.container}>
      <Text>Agenda des cours et événements</Text>
    </View>
  );
}

function VideosScreen() {
  return (
    <View style={styles.container}>
      <Text>Vidéos des cours en ligne</Text>
    </View>
  );
}

// Initialize Tab & Stack Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Assure-toi que Stack est correctement défini

// App Component
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={CustomSplashScreen} />
        <Stack.Screen name="Accueil" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  menu: {
    width: '80%',
    justifyContent: 'space-around',
    height: 200,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    borderColor: '#ff4d4d',
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffb84d',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
