exports.get_enseignants = {
    name: "list_enseignants",
    text: "SELECT id, nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni, matricule FROM app.enseignants"
}
exports.post_enseignants = {
    name: "post_enseignants",
    text: "INSERT INTO app.enseignants(nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni, matricule) VALUES ($1,$2,$3, $4, $5, $6, $7, $8, $9)"
}
exports.del_enseignants = {
    name: "del_enseignants",
    text: "DELETE FROM app.enseignants WHERE id=$1"
}
exports.put_enseignants = {
    name: "del_enseignants",
    text: "UPDATE app.enseignants SET nom=$1, prenoms=$2, pseudo=$3, photo=$4, email=$5, contacts=$6, no_cni=$7, date_exp_cni=$8, matricule=$9 WHERE id=$10"
}