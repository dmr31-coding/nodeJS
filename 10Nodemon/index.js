// create web server - http module

import http from 'http';



const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Response from server 44');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log('Server 44 running at http://localhost:8000');
});