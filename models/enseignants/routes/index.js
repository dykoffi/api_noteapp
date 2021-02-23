const express = require('express')
const router = express.Router();
const pg = require("../../../databases/connexion")
const {
    get_enseignants
} = require("../db/request")

router
    .get("/", (req, res, next) => {
        pg.query(get_enseignants, (error, result) => {
            if (error) {
                console.log(error);
                res.end(error)
            } else {
                res.status(200)
                res.json(result.rows)
            }
        })
    })
module.exports = router