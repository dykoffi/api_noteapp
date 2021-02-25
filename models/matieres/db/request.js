exports.get_matieres = {
    name: "list_matieres",
    text: "SELECT * FROM app.matieres"
}
exports.post_matieres = {
    name: "post_matiere",
    text: "INSERT INTO app.matieres(nom, code ,coefficient) VALUES ($1,$2,$3)"
}
exports.del_matieres = {
    name: "del_matiere",
    text: "DELETE FROM app.matieres WHERE id=$1"
}
exports.put_matieres = {
    name: "put_matiere",
    text: "UPDATE app.matieres SET nom=$1, code=$2, coefficient=$3 WHERE id=$4"
}