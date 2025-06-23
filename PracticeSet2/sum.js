const sumRequestHandler = (req,res) => {
    console.log("in sum request handler", req.url);
    const body = [];
    req.on('data',chunk =>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', ()=> {
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);
        const params = new URLSearchParams(fullBody);
        const bodyObject = Object.fromEntries(params);
        const result = Number(bodyObject.first) + Number(bodyObject.second);
        console.log(result);

        res.setHeader('Content-type', 'text/html');
        res.write(`
            <html>
            <head><title></title>
            <body>
            <h1>Your sum is ${result}</h1>
            </body>
            </html>
            `);
            return res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;