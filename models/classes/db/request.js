exports.get_classes = {
    name: "list_classes",
    text: "SELECT * FROM app.classes"
}
exports.post_classes = {
    name: "post_classes",
    text: "INSERT INTO app.classes(nom, cycle) VALUES ($1,$2)"
}
exports.del_classes = {
    name: "del_classes",
    text: "DELETE FROM app.classes WHERE id=$1"
}
exports.put_classes = {
    name: "put_classes",
    text: "UPDATE app.classes SET nom=$1, cycle=$2 WHERE id=$3"
}