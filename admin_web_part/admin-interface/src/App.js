import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import EventManager from './EventManager';
import VideoManager from './VideoManager';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // État de connexion

  const handleLogin = () => {
    setIsLoggedIn(true);  // Modifier l'état une fois l'utilisateur connecté
  };

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/events" element={<EventManager />} />
          <Route path="/videos" element={<VideoManager />} />
        </Routes>
      ) : (
        <Login onLogin={handleLogin} />  // Afficher la page de connexion si pas connecté
      )}
    </Router>
  );
}

export default App;
