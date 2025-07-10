const express = require('express');
const userRouter = express.Router();
const homesController = require('../controller/homes')

userRouter.get("/", homesController.getHome);

module.exports = userRouter;