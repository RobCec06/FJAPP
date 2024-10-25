import React, { useState } from 'react';
import './Login.css'; // Importer le fichier de styles pour le formulaire
import { auth } from './firebaseConfig';  // Import Firebase Auth
import { signInWithEmailAndPassword } from 'firebase/auth';  // Importer la fonction de connexion

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);  // Réinitialise l'erreur avant chaque tentative
    try {
      // Authentification avec Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();  // Appeler la fonction onLogin en cas de succès
    } catch (error) {
      setError('Email ou mot de passe incorrect');  // Gestion des erreurs
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={require('./assets/logo_japan_forge.png')} alt="Logo La Forge" className="login-logo" />
        <h2 className="login-title">Connexion Admin</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
