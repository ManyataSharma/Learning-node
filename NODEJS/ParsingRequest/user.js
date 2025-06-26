const fs = require('fs');
const userRequestHandler = (req,res) => {
    console.log(req.url, req.method);
    if(req.url==='/'){
        res.setHeader('Content-type', 'text/html');
        res.write(`
            <html>
            <head><title>Complete coding</title></head>
            <body><h1>Enter your details</h1>
            <form action = "/submit-details" method="POST">
            <input type = "text" name = "username" placeholder = "enter your name"><br>
            <label for="male">Male</label>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="female">Female</label>
            <input type="radio" id="female" name="gender" value="female" />
            <br><input type="submit" value="submit" >
            </form>
            </body>
            </html>
            `)
            return res.end();
    }
    else if(req.url.toLowerCase() === "/submit-details" && req.method === "POST"){
        const body =[];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFile('user.txt',JSON.stringify(bodyObject) , error => {
                console.log('Data written successfully');
            });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

        });
 
    }

};
module.exports = userRequestHandler;