exports.get_drens = {
    name: "list_drens",
    text: "SELECT * FROM app.drens"
}
exports.post_drens = {
    name: "post_dren",
    text: "INSERT INTO app.drens(nom, zone ,email) VALUES ($1,$2,$3)"
}
exports.del_drens = {
    name : "del_dren",
    text : "DELETE FROM app.drens WHERE id=$1"
}
exports.put_drens = {
    name : "del_dren",
    text : "UPDATE app.drens SET nom=$1, zone=$2, email=$3 WHERE id=$4"
}