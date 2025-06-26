const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("came in first middleware",req.url,req.method);
    next();
});
app.use((req,res, next) => {
    console.log("came in second middleware",req.url,req.method);
    next();
});
app.use((req,res, next) => {
    console.log("came in third middleware",req.url,req.method);
     // res.send("<p> Third middleware sending res</p>")
     next();
});
app.get("/", (req,res ,next) => {
    console.log("Handling / via GET",req.url,req.method);
    next();
});
app.get("/contact-us", (req,res) => {
    console.log("Handling contact-us via GET",req.url,req.method);
    res.send(`
        <html>
            <head><title>Contact Us Page</title></head>
            <body>
                <h1>This is contact us page</h1>
                <h2> Please provide your details </h2>
                <form action = "/contact-us" method = "POST">
                <input type="text" name = "name" placeholder="enter your name"/>
                <input type="text" name = "email" placeholder="enter your email"/>
                <input type="submit"/>
                </form> 
            </body>
        </html>
    `);
});
app.post("/contact-us", (req,res) => { 
    console.log("Handling contact-us for POST",req.url,req.method);
    res.send("<h1> We will contact you shortly </h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
