# api_noteapp

sudo -iu postgres
psql

>CREATE ROLE oscav WITH LOGIN PASSWORD '1234';
>CREATE DATABASE noteapp owner oscav;
>exit

cd databases/
psql noteapp -U oscav -h localhost

>\i db.sql
>\i insert.sql
>exit

cd ..
node index.js

CHAQUE MODELES CONTIENT UN FICHIER example.http qui regroupe toutes les requêtes prévues pour ces dits modèles. Il peut arriver que les requêtes DELETE génèrent des erreurs si la table associée est référencée dans une autre. Les mésures seront pris afin de maintenir ce problème