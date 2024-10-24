import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';  // Import Firestore
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const VideoManager = () => {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  // Fonction pour récupérer les vidéos depuis Firestore
  const fetchVideos = async () => {
    const videoCollection = await getDocs(collection(db, 'videos'));
    setVideos(videoCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  // Fonction pour ajouter une nouvelle vidéo
  const handleAddVideo = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'videos'), { title, url });
      setTitle('');
      setUrl('');
      fetchVideos();  // Rafraîchir la liste après ajout
    } catch (error) {
      console.error('Erreur lors de l’ajout de la vidéo : ', error);
    }
  };

  // Fonction pour supprimer une vidéo
  const handleDeleteVideo = async (id) => {
    try {
      await deleteDoc(doc(db, 'videos', id));
      fetchVideos();  // Rafraîchir la liste après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression de la vidéo : ', error);
    }
  };

  // Charger les vidéos au montage du composant
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Gestion des vidéos</h2>
      <form onSubmit={handleAddVideo}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de la vidéo"
        />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL de la vidéo"
        />
        <button type="submit">Ajouter une vidéo</button>
      </form>

      <h3>Vidéos existantes</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            {video.title} - <a href={video.url} target="_blank" rel="noreferrer">Voir la vidéo</a>
            <button onClick={() => handleDeleteVideo(video.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoManager;
