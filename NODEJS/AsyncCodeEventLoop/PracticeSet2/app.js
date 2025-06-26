const http = require('http');
const {userRequestHandler} = require('./user');
const server = http.createServer(userRequestHandler);

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});