const express = require('express')
const router = express.Router();
const {
    get_educateurs,
    del_educateurs,
    post_educateurs,
    put_educateurs
} = require("../db/request")

const header = require('../db/headers')

router
    .get("/", (req, res, next) => {
        pg.query(get_educateurs, (error, result) => {
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
        pg.query(del_educateurs, [req.params.id], (error, result) => {
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
        const { nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni } = body
        pg.query(post_educateurs, [nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni], (error, result) => {
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
        const { nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni } = body
        pg.query(put_educateurs, [nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni, req.params.id], (error, result) => {
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