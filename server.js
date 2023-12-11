// Import du module express
const express = require("express");

// Instanciation / création du serveur express
const server = express();

//j'importe le tableau des articles dans une variable
const movies = require(`./data/films.json`)

//Je défini mon objet articles.json globalement
server.locals.movies = movies;

// Configuration Express/EJS
server.set('views', './app/views');
server.set('view engine', 'ejs');

// Troisième middleware, l'url de la requête correspond-elle à un fichier présent dans le dossier "public"
// Configuration des fichiers statiques
server.use(express.static('public'));

// Import du routeur
const router = require("./app/router");

// Quatrième middleware, l'url de la requête est elle gérée par le router
// Utilisation du routeur
server.use(router);

// PORT d'écoute
const PORT = process.env.GITHUB_PAGES ? process.env.PORT || 80 : 3000;

// Mise sur écoute sur le port 
server.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});