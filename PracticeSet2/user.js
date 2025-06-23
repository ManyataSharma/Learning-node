const fs = require('fs');
const {sumRequestHandler} = require('./sum');

const userRequestHandler = (req,res) => {
    console.log(req.url, req.method);
    if(req.url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body><h1>Welcome to calculator page</h1>
            <a href = "/calculator" >Link to Calculator page</a>
            </body>
            </html>
            `);
            return res.end();
    }
    else if(req.url.toLowerCase() === '/calculator'){
        res.setHeader('Content-type', 'text/html');
        res.write(`
            <html>
            <head><title>Calculator Page</title></head>
            <body><h1>This is calculator page</h1>
            <form action = '/calculator-result' method = "POST">
            <input type="text" name="first" placeholder = "enter first number">
            <input type ="text" name ="second" placeholder = "enter second number">
            <input type="submit" value="Sum" >
            </form>
            </body>
            </html>
            `);
            return res.end();

    } else if(req.url.toLowerCase()=== '/calculator-result' && req.method==="POST"){
       return sumRequestHandler(req,res);
    }

     res.setHeader('Content-type', 'text/html');
        res.write(`
            <html>
            <head><title></title>
            <body>
            <h1>404 page not found</h1>
            </body>
            </html>
            `);
      
          return res.end();
}

exports.userRequestHandler = userRequestHandler;