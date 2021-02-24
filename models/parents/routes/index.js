const express = require('express')
const router = express.Router();
const {
    get_parents,
    del_parents,
    post_parents,
    put_parents
} = require("../db/request")

const header = require('../db/headers')

router
    .get("/", (req, res, next) => {
        pg.query(get_parents, (error, result) => {
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
        try {
            pg.query(del_parents, [req.params.id], (error, result) => {
                if (error) {
                    console.log(error);
                    res.end(error)
                } else {
                    res.header(header)
                    res.status(200)
                    res.json(result.rows)
                }
            })
        } catch (error) {
            console.log(error);
        }

    })
    .post("/", (req, res, next) => {
        let body = {}
        try { body = JSON.parse(Object.keys(req.body)[0]) } catch (error) { body = req.body }
        const { nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni } = body
        pg.query(post_parents, [nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni], (error, result) => {
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
        pg.query(put_parents, [nom, prenoms, pseudo, photo, email, contacts, no_cni, date_exp_cni, req.params.id], (error, result) => {
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