const express = require('express')
const router = express.Router();
const {
    get_enseignants,
    del_enseignants,
    post_enseignants,
    put_enseignants
} = require("../db/request")

const header = require('../db/headers')

router
    .get("/", (req, res, next) => {
        pg.query(get_enseignants, (error, result) => {
            if (error) {
                console.log(error);
                res.end(error)
            } else {
                res.header(header)
                res.status(200)
                res.json(result.rows)
            }
        })
    })
    .delete("/:id", (req, res, next) => {
        pg.query(del_enseignants, [req.params.id], (error, result) => {
            if (error) {
                console.log(error);
                res.end(error)
            } else {
                res.header(header)
                res.status(200)
                res.json(result.rows)
            }
        })
    })
    .post("/", (req, res, next) => {
        let body = {}
        try { body = JSON.parse(Object.keys(req.body)[0]) } catch (error) { body = req.body }
        const { nom, zone, email } = body
        pg.query(post_enseignants, [nom, zone, email], (error, result) => {
            if (error) {
                console.log(error);
                res.end(error)
            } else {
                res.header(header)
                res.status(200)
                res.json(result.rows)
            }
        })
    })
    .put("/:id", (req, res, next) => {
        let body = {}
        try { body = JSON.parse(Object.keys(req.body)[0]) } catch (error) { body = req.body }
        const { nom, zone, email } = body
        pg.query(put_enseignants, [nom, zone, email, req.params.id], (error, result) => {
            if (error) {
                console.log(error);
                res.end(error)
            } else {
                res.header(header)
                res.status(200)
                res.json(result.rows)
            }
        })
    })
module.exports = router