// external module
const express = require('express');
// local module
const requestHandler = require('./user');

const app = express();

//adding middleware

app.use("/", (req,res,next) =>{
  console.log("came in first middleware", req.url, req.method);
  next();
});

app.use("/submit-details", (req,res,next) =>{
  console.log("came in second middleware", req.url, req.method); 
  res.send("<p> Welcome to jahannum aapka swagat h maut ka nanga naach hoga yaha par </p>");
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});