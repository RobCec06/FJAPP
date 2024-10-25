import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import EventManager from './EventManager';
import VideoManager from './VideoManager';
import './App.css'; // Importer le fichier de styles
import { initializeApp } from 'firebase/app';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // État de connexion

  const handleLogin = () => {
    setIsLoggedIn(true);  // Modifier l'état une fois l'utilisateur connecté
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <div className="App-header">
            <img src={require('./assets/logo_japan_forge.png')} className="App-logo" alt="Logo" />
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/events" element={<EventManager />} />
              <Route path="/videos" element={<VideoManager />} />
            </Routes>
          </div>
        ) : (
          <Login onLogin={handleLogin} />  // Afficher la page de connexion si pas connecté
        )}
      </div>
    </Router>
  );
}

export default App;
