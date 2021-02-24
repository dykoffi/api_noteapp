const express = require('express')
const router = express.Router();
const {
    get_eleves,
    del_eleves,
    post_eleves,
    put_eleves
} = require("../db/request")

const header = require('../db/headers')

router
    .get("/", (req, res, next) => {
        pg.query(get_eleves, (error, result) => {
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
        pg.query(del_eleves, [req.params.id], (error, result) => {
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
        const { nom, prenoms, pseudo, photo, email, contacts, matricule, date_naissance, etablissement, classe } = body
        pg.query(post_eleves, [nom, prenoms, pseudo, photo, email, contacts, matricule, date_naissance, etablissement, classe], (error, result) => {
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
        const { nom, prenoms, pseudo, photo, email, contacts, matricule, date_naissance, etablissement, classe } = body
        pg.query(put_eleves, [nom, prenoms, pseudo, photo, email, contacts, matricule, date_naissance, etablissement, classe, req.params.id], (error, result) => {
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