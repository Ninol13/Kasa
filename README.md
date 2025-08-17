# Kasa

Projet réalisé dans le cadre de la formation Développeur Web React chez OpenClassrooms.

## Table des matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Aperçu](#aperçu)
- [Auteur](#auteur)

## Description

Kasa est une application web de location immobilière développée avec React. Elle permet aux utilisateurs de parcourir des annonces de logements, de consulter les détails de chaque bien, et de naviguer facilement entre différentes pages. Ce projet met en pratique les concepts fondamentaux de React, la gestion des routes avec React Router, et la création d'une interface utilisateur responsive.

## Fonctionnalités

- **Affichage de la liste des logements** : Présentation dynamique des annonces à partir de données JSON.
- **Page de détails pour chaque logement** : Informations détaillées, galerie d’images, description, équipements, et notes.
- **Navigation entre les pages** : Accueil, À propos, et pages d’erreur personnalisées (404).
- **Gestion des erreurs** : Redirection automatique vers une page 404 en cas de route inconnue.
- **Responsive design** : Interface adaptée à tous les types d’écrans (mobile, tablette, desktop).
- **Accessibilité** : Utilisation de balises sémantiques et navigation clavier.
- **Composants réutilisables** : Mise en place de composants modulaires pour faciliter la maintenance.

## Technologies utilisées

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [SASS](https://sass-lang.com/) selon le projet
- [Create React App](https://create-react-app.dev/) (pour le bootstrap du projet)

## Installation

1. **Cloner le dépôt :**
    ```bash
    git clone https://github.com/Ninol13/Kasa.git
    ```
2. **Installer les dépendances :**
    ```bash
    cd kasa
    npm install
    ```
3. **Lancer l'application en mode développement :**
    ```bash
    npm start
    ```
    L’application sera accessible à l’adresse [http://localhost:3000](http://localhost:3000).

## Utilisation

- Naviguez sur la page d’accueil pour voir la liste des logements.
- Cliquez sur une annonce pour accéder à la page de détails.
- Utilisez le menu pour accéder à la page À propos.
- En cas d’URL incorrecte, une page 404 s’affichera.

## Structure du projet

```
kasa/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── logements.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Logement.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
├── package.json
└── README.md
```

## Aperçu

![Aperçu de Kasa]

![alt text](image.png)

## Auteur

Projet réalisé par Nino LITIM dans le cadre de la formation Développeur Web React chez OpenClassrooms.

Pour toute question ou suggestion, n’hésitez pas à ouvrir une issue ou à me contacter.