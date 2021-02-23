
exports.list_etablissements = {
    name: "list_etablissements",
    text: "SELECT * FROM app.etablissements"
}

exports.list_eleves = {
    name: "list_eleves",
    text: "SELECT * FROM app.eleves"
}

exports.list_enseignants = {
    name: "list_enseignants",
    text: "SELECT * FROM app.enseignants"
}

exports.list_educateurs = {
    name: "list_educateurs",
    text: "SELECT * FROM app.educateurs"
}

exports.list_drens = {
    name: "list_drens",
    text: "SELECT * FROM app.drens"
}

exports.list_classes = {
    name: "list_classes",
    text: `SELECT 
                app.classes.nom_classe, 
                app.cycles.type_cycle _cycle
    FROM app.classes, app.cycles WHERE cycle=id_cycle`
}