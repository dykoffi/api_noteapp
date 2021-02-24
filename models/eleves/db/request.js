exports.get_eleves = {
    name: "list_eleves",
    text: "SELECT id, nom, prenoms, pseudo, photo, email, contacts, matricule, date_naissance, etablissement, classe FROM app.eleves"
}
exports.post_eleves = {
    name: "post_eleves",
    text: "INSERT INTO app.eleves(nom, prenoms, pseudo, photo, email, contacts, matricule, date_naissance, etablissement, classe) VALUES ($1,$2,$3, $4, $5, $6, $7, $8, $9, $10)"
}
exports.del_eleves = {
    name: "del_eleves",
    text: "DELETE FROM app.eleves WHERE id=$1"
}
exports.put_eleves = {
    name: "put_eleves",
    text: "UPDATE app.eleves SET nom=$1, prenoms=$2, pseudo=$3, photo=$4, email=$5, contacts=$6, matricule=$7, date_naissance=$8, etablissement=$9, classe=$10 WHERE id=$11"
}