const express = require("express");
const fs = require('fs');
const notes = require('express').Router();
const path = require('path');
const dbpath = require('../db/db.json')

notes.get("/", (req, res) => {
    fs.readFile(dbpath, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send(err);
    } else {
        readFromFile(dbpath).then((data) => res.json(JSON.parse(data)));
    }
})
})


notes.post('/', (req, res) => {
    if (!req.body) {
        res.status(400).send("Request cannot be empty");
    } else {
            fs.readFile(dbpath, "utf-8", (err, data) => {
            const {title, text} = req.body;
            const createNote = {
                id: uuid(),
                tite: title,
                text: text,
            }
        });
            

        readAndAppend(createNote, dbpath);
        res.json(`Note added`);
    }
})

module.exports = notes;