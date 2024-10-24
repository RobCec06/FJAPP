# **La Forge Je'Daii - Application Mobile et Interface Admin**

## **Description du projet**

L'application **La Forge Je'Daii** est un projet de plateforme réservé aux membres de l'association de sabre laser sportif "La Forge Je'Daii". Elle propose une interface mobile et une interface web admin, avec des fonctionnalités dédiées à la gestion des événements, des vidéos de cours, et des profils utilisateurs.

### **Objectifs principaux :**
- Fournir une **application mobile** pour les membres de l'association avec des fonctionnalités comme :
  - **Agenda des événements** : voir et participer aux événements organisés par l'association.
  - **Cours vidéo** : accéder aux vidéos des cours de sabre laser.
  - **Profil utilisateur** : gérer son propre profil, voir les informations de compte.
- Développer une **interface web admin** pour les administrateurs de l'association :
  - **Gestion des événements** : ajouter, modifier, supprimer des événements.
  - **Gestion des vidéos** : ajouter, modifier, supprimer des vidéos de cours.
  - **Tableau de bord** : accès aux statistiques et gestion globale des utilisateurs et des données.

---

## **Technologies utilisées**

### **Front-end Mobile :**
- **Expo** (framework pour le développement d'applications React Native)
- **React Native** : pour créer une interface mobile intuitive et interactive.
- **Styled Components** : pour un style visuel dynamique et cohérent.
- **Firebase Authentication** : pour la gestion des connexions utilisateurs (authentification par email et mot de passe).
- **Firebase Firestore** : pour stocker et gérer les données des événements, vidéos, et profils utilisateurs.

### **Front-end Web Admin :**
- **React.js** : pour l'interface web destinée aux administrateurs.
- **React Router** : pour la gestion de la navigation entre les différentes sections (gestion des événements, vidéos, etc.).
- **Firebase Authentication** : pour sécuriser l'accès à l'interface admin.
- **Firebase Firestore** : pour la gestion des données (événements, vidéos, utilisateurs).

### **Back-end :**
- **Firebase Firestore** : base de données NoSQL utilisée pour stocker toutes les informations relatives aux événements, vidéos, et utilisateurs.
- **Firebase Hosting** (optionnel) : pour héberger l'application web admin en ligne.

-©2024 La Forge Je'Daii