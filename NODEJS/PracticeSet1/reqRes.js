const http = require('http');
const server = http.createServer((req,res)=> {
    console.log(req.url, req.method);
    if(req.url === '/home' && req.method === 'GET'){
        res.write('<h1> Welcome to home page</h1>');
    } else if(req.url === '/men' && req.method === 'GET'){
        res.write('<h1> Welcome to men page</h1>');
    } else if(req.url === '/women' && req.method === 'GET'){
        res.write('<h1> Welcome to women page</h1>');
    } else if(req.url === '/kids' && req.method === 'GET'){
        res.write('<h1> Welcome to kids page</h1>');
    } else if(req.url === '/cart' && req.method === 'GET'){
        res.write('<h1> Welcome to cart page</h1>');
    }
    res.write(`
    <html>
    <head>
        <title>MYNTRA </title>
        </head>
        <body>
            <nav>
                <ul>
                    <li><a href = "/home">Home</a></li>
                    <li><a href = "/men">Men</a></li>
                    <li><a href = "/women">Women</a></li>
                    <li><a href = "/kids">Kids</a></li>
                    <li><a href = "/cart">Cart</a></li>
                </ul>
            </nav>
        </body>
        </html>
    `);
    res.end();
});

 server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});