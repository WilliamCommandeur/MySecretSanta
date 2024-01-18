require('dotenv').config();
const path = require('node:path');
const express = require('express');
const expressSession = require('express-session');
const app = express();
const router = require('./app/router');

// Moteur de rendu EJS
app.set('view engine', 'ejs');

// Pour accéder aux données d'un formulaire POST
app.use(express.urlencoded({ extended: true }));

// Pour mitiger une attaque où le chemin de dossier serait compromis
const viewsDirectory = path.join(__dirname, '/app/views');
app.set('views', viewsDirectory);

// Fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

// Intégration des variables d'environnement à l'application
app.set('port', process.env.PORT || 5000);
app.set('base_url', process.env.BASE_URL || 'http://localhost');

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('base_url')}:${app.get('port')}`);
});
