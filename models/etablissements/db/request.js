exports.get_etablissements = {
    name: "list_etablissements",
    text: "SELECT * FROM app.etablissements"
}
exports.post_etablissements = {
    name: "post_dren",
    text: "INSERT INTO app.etablissements(nom, code ,email, dren) VALUES ($1,$2,$3,$4)"
}
exports.del_etablissements = {
    name : "del_etablissements",
    text : "DELETE FROM app.etablissements WHERE id=$1"
}
exports.put_etablissements = {
    name : "put_etablissements",
    text : "UPDATE app.etablissements SET nom=$1, code=$2, email=$3, dren=$4 WHERE id=$5"
}