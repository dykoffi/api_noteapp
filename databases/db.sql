DROP SCHEMA app CASCADE;
CREATE SCHEMA app;

CREATE TABLE app.personnes (
    nom                                 VARCHAR(200),
    prenoms                             VARCHAR(200),
    pseudo                              VARCHAR(200),
    photo                               VARCHAR(200),
    mdp                                 VARCHAR(200),
    email                               VARCHAR(255),
    contacts                            VARCHAR(20) []
);

CREATE TABLE app.parents(
    id                                  SERIAL PRIMARY KEY,
    no_cni                              VARCHAR(200),
    date_exp_cni                        DATE
)INHERITS (app.personnes);

CREATE TABLE app.enseignants(
    id                                  SERIAL PRIMARY KEY,
    no_cni                              VARCHAR(200),
    date_exp_cni                        DATE,
    matricule                           VARCHAR(200)
)INHERITS (app.personnes);

CREATE TABLE app.drens(
    id                                  SERIAL PRIMARY KEY,
    nom                                 VARCHAR(200),
    zone                                VARCHAR(200),
    email                               VARCHAR(255)
);

CREATE TABLE app.etablissements(
    id                                  SERIAL PRIMARY KEY,
    nom                                 VARCHAR(200),
    code                                VARCHAR(200),
    email                               VARCHAR(255),
    dren                                INT REFERENCES app.drens(id)
);

CREATE TABLE app.educateurs(
    id                                  SERIAL PRIMARY KEY,
    no_cni                              VARCHAR(200),
    date_exp_cni                        DATE,
    etablissement                       INT REFERENCES app.etablissements(id)
)INHERITS (app.personnes);

CREATE TABLE app.cycles(
    id                                  SERIAL PRIMARY KEY,
    type                                VARCHAR(200)
);

CREATE TABLE app.classes(
    id                                  SERIAL PRIMARY KEY,
    nom                                 VARCHAR(255),
    cycle                               INT REFERENCES app.cycles(id)
);

CREATE TABLE app.eleves(
    id                                  SERIAL PRIMARY KEY,
    matricule                           VARCHAR(200),
    date_naissance                      DATE,
    etablissement                       INT REFERENCES app.etablissements(id),
    classe                              INT REFERENCES app.classes(id)
)INHERITS (app.personnes);

CREATE TABLE app.commentaires(
    id                                  SERIAL PRIMARY KEY,
    commentaire                         VARCHAR(255),
    eleve                               INT REFERENCES app.eleves(id)
);

CREATE TABLE app.souscriptions(
    id                                  SERIAL PRIMARY KEY,
    info                                BOOLEAN,
    type                                VARCHAR(200),
    parent                              INT REFERENCES app.parents(id),
    eleve                               INT REFERENCES app.eleves(id)
);

CREATE TABLE app.matieres(
    id                                  SERIAL PRIMARY KEY,
    nom                                 VARCHAR(200),
    code                                VARCHAR(200),
    coefficient                         FLOAT
);

CREATE TABLE app.evaluations(
    id                                  SERIAL PRIMARY KEY,
    date                                DATE,
    type                                VARCHAR(200),
    description                         VARCHAR(200),
    matiere                             INT REFERENCES app.matieres(id)
);


CREATE TABLE app.absences(
    id                                  SERIAL PRIMARY KEY,
    heure                               DATE,
    date                                DATE,
    modif                               VARCHAR(255),
    eleve                               INT REFERENCES app.eleves(id),
    matiere                             INT REFERENCES app.matieres(id)
);

CREATE TABLE app.notes(
    id                                  SERIAL PRIMARY KEY,
    commentaire                         VARCHAR(200),
    evaluation                          INT REFERENCES app.evaluations(id),
    eleve                               INT REFERENCES app.eleves(id),
    matiere                             INT REFERENCES app.matieres(id)
);

CREATE TABLE app.enseignants_matieres_etablissements(
    id                                  SERIAL PRIMARY KEY,
    enseignant                          INT REFERENCES app.enseignants(id),
    matiere                             INT REFERENCES app.matieres(id),
    etablissement                       INT REFERENCES app.etablissements(id)
);