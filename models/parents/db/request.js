exports.get_parents = {
    name: "list_parents",
    text: "SELECT id, nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni  FROM app.parents"
}
exports.post_parents = {
    name: "post_parents",
    text: "INSERT INTO app.parents(nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni) VALUES ($1,$2,$3, $4, $5, $6, $7, $8)"
}
exports.del_parents = {
    name: "del_parents",
    text: "DELETE FROM app.parents WHERE id=$1"
}
exports.put_parents = {
    name: "put_parents",
    text: "UPDATE app.parents SET nom=$1, prenoms=$2, pseudo=$3, photo=$4, email=$5, contacts=$6, no_cni=$7, date_exp_cni=$8 WHERE id=$9"
}