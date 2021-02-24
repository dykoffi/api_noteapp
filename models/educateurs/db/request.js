exports.get_educateurs = {
    name: "list_educateurs",
    text: "SELECT id, nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni FROM app.educateurs"
}
exports.post_educateurs = {
    name: "post_educateurs",
    text: "INSERT INTO app.educateurs(nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni) VALUES ($1,$2,$3, $4, $5, $6, $7, $8)"
}
exports.del_educateurs = {
    name: "del_educateurs",
    text: "DELETE FROM app.educateurs WHERE id=$1"
}
exports.put_educateurs = {
    name: "put_educateurs",
    text: "UPDATE app.educateurs SET nom=$1, prenoms=$2, pseudo=$3, photo=$4, email=$5, contacts=$6, no_cni=$7, date_exp_cni=$8 WHERE id=$9"
}