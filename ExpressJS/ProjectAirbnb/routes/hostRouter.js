const path = require('path');
const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtils");


hostRouter.get("/add-home", (req, res, next) => {
    res.render('add-home', { currentPage: 'add-Home' });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log("home added successfully", req.body);
    registeredHomes.push(req.body);
    res.render('homeAdded', { currentPage: 'homeAdded' });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;