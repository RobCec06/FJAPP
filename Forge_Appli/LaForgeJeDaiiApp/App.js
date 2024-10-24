import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useEffect } from 'react';

// Charger les polices personnalisées
const fetchFonts = () => {
  return Font.loadAsync({
    'custom-font': require('./assets/fonts/Starjedi.ttf'), // Mets le nom exact de ta police
  });
};

function HomeScreen({ navigation }) {
  const spinValue = new Animated.Value(0);

  // Animation de rotation du logo
  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000, // Durée de l'animation
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  // Interpolation de la rotation
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
          {/* Animated buttons */}
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

// Écrans placeholder
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

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

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
            backgroundColor: '#000', // Noir pour la barre de navigation
            borderTopColor: '#ff4d4d', // Rouge pour une touche similaire au logo
          },
          headerStyle: {
            backgroundColor: '#000', // Noir pour la barre supérieure
          },
          headerTintColor: '#fff', // Texte blanc
          headerTitleStyle: {
            fontFamily: 'custom-font', // Police personnalisée pour le titre
            fontSize: 20,
          },
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
        <Tab.Screen name="Agenda" component={AgendaScreen} />
        <Tab.Screen name="Videos" component={VideosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
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
