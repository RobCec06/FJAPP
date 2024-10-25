import styled from 'styled-components';
import { Link } from 'react-router-dom';  // Importer Link depuis react-router-dom

const Button = styled.button`
  background-color: #000;
  color: #ffb84d;
  padding: 15px 30px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid #ff4d4d;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
    color: #fff;
  }
`;

const AdminDashboard = () => {
  return (
    <div>
      <h1>Bienvenue dans le tableau de bord admin</h1>
      <Link to="/events">
        <Button>Gérer les événements</Button>
      </Link>
      <Link to="/videos">
        <Button>Gérer les vidéos</Button>
      </Link>
    </div>
  );
};

export default AdminDashboard;
