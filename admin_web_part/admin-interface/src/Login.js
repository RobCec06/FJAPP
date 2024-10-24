import { useState } from 'react';
import { auth } from './firebaseConfig'; // Firebase config avec auth importé
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Tentative de connexion avec email et mot de passe
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();  // Si la connexion réussit, appelle onLogin pour changer l'état
    } catch (error) {
      // En cas d'erreur, afficher un message
      setError('Erreur de connexion. Vérifiez vos informations.');
    }
  };

  return (
    <div>
      <h2>Connexion Admin</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Afficher les erreurs en rouge */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
