const express = require('express')
const router = express.Router();
const {
    get_classes,
    del_classes,
    post_classes,
    put_classes
} = require("../db/request")

const header = require('../db/headers')

router
    .get("/", (req, res, next) => {
        pg.query(get_classes, (error, result) => {
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
        pg.query(del_classes, [req.params.id], (error, result) => {
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
        const { nom, cycle } = body
        pg.query(post_classes, [nom, cycle], (error, result) => {
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
        const { nom, cycle } = body
        pg.query(put_classes, [nom, cycle, req.params.id], (error, result) => {
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