const path = require('path');
const express = require('express');
const HomeRouter = express.Router();

const rootDir = require('../utils/pathUtil');

HomeRouter.get("/", (req,res ,next) => {
    res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = HomeRouter;