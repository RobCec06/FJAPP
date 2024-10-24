import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';  // Import Firestore
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  // Fonction pour récupérer les événements depuis Firestore
  const fetchEvents = async () => {
    const eventCollection = await getDocs(collection(db, 'events'));
    setEvents(eventCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  // Fonction pour ajouter un nouvel événement
  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'events'), { title, date });
      setTitle('');
      setDate('');
      fetchEvents();  // Rafraîchir la liste après ajout
    } catch (error) {
      console.error('Erreur lors de l’ajout de l’événement : ', error);
    }
  };

  // Fonction pour supprimer un événement
  const handleDeleteEvent = async (id) => {
    try {
      await deleteDoc(doc(db, 'events', id));
      fetchEvents();  // Rafraîchir la liste après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression de l’événement : ', error);
    }
  };

  // Charger les événements au montage du composant
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Gestion des événements</h2>
      <form onSubmit={handleAddEvent}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de l'événement"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Ajouter un événement</button>
      </form>

      <h3>Événements existants</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
            <button onClick={() => handleDeleteEvent(event.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;
