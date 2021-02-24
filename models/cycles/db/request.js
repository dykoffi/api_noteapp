exports.get_cycles = {
    name: "list_cycles",
    text: "SELECT * FROM app.cycles"
}
exports.post_cycles = {
    name: "post_cycles",
    text: "INSERT INTO app.cycles(type) VALUES ($1)"
}
exports.del_cycles = {
    name: "del_cycles",
    text: "DELETE FROM app.cycles WHERE id=$1"
}
exports.put_cycles = {
    name: "put_cycles",
    text: "UPDATE app.cycles SET type=$1 WHERE id=$2"
}