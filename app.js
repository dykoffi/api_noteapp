"use strict";
const express = require('express'); // utiliser le framework express pour faciliter le dev
const app = express(); // use la fonction app de express
const cors = require('cors'); //pour les requetes cross origins
const logger = require('morgan'); //pour l'authentification de mes requetes
const createError = require('http-errors'); // generer les erreurs hhtp
const path = require('path'); //gerer les chemins
const cookieparser = require('cookie-parser')
const pg = require("./databases/connexion")
//activation des fonctionnalités de l'API
app.use(cors()); //cross origin requêtes
app.use(express.json()); //Analyser application/json
app.use(express.urlencoded({ extended: false })); //Analyser Application/x-www-form-urlenconded
app.use(express.static(path.join(__dirname, 'public'))); //definition du repertoire static
app.use(logger('dev'));
app.use(cookieparser()); //activation des cookies

//APPLICATION DES MDDLEWARES

//DÉFINITION DES ROUTES

app.use('/parents', require('./models/parents/routes'))
app.use('/enseignants', require('./models/enseignants/routes'))
app.use('/educateurs', require('./models/educateurs/routes'))
app.use('/drens', require('./models/drens/routes'))
app.use('/etablissements', require('./models/etablissements/routes'))

//
app.use((req, res, next) => { next(createError(404)) })
app.use((err, req, res, next) => { console.log(err.message); })

//
module.exports = app