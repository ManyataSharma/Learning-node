const path = require('path');
const express = require('express');
const ContactRouter = express.Router();

const rootDir = require('../utils/pathUtil');

ContactRouter.get("/contact-us", (req,res) => {
    console.log("Handling contact-us via GET",req.url,req.method);
    res.sendFile(path.join(rootDir,"views", "Contact.html"));
});

ContactRouter.post("/contact-us", (req,res) => { 
    console.log("Handling contact-us for POST",req.url,req.method,req.body);
    res.send("<h1> We will contact you shortly </h1>");
});

module.exports = ContactRouter;