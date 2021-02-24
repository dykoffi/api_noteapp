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