const express = require('express')
const router = express.Router();
const {
    get_educateurs
} = require("../db/request")

router
    .get("/", (req, res, next) => {
        pg.query(get_educateurs, (error, result) => {
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